import { readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const hotelDetailsFile = fileURLToPath(
  new URL('../src/data/hotelDetailData.json', import.meta.url)
);
const hotelRoute = /^\/api\/hotels\/([^/]+)$/;
const maxRequestSize = 2 * 1024 * 1024;

function sendJson(response, status, data) {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(data));
}

async function readHotels() {
  const contents = await readFile(hotelDetailsFile, 'utf8');
  return JSON.parse(contents.replace(/^\uFEFF/, ''));
}

async function readRequestJson(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxRequestSize) {
      const error = new Error('Request body is too large.');
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    const error = new Error('Request body must contain valid JSON.');
    error.statusCode = 400;
    throw error;
  }
}

async function handleHotelApi(request, response, next) {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  if (!pathname.startsWith('/api/hotels')) {
    next();
    return;
  }

  const remoteAddress = request.socket.remoteAddress || '';
  const isLoopback =
    remoteAddress === '::1' ||
    remoteAddress === '127.0.0.1' ||
    remoteAddress.startsWith('::ffff:127.');
  if (!isLoopback) {
    sendJson(response, 403, { error: 'The local hotel dashboard API is only available on this computer.' });
    return;
  }

  try {
    if (request.method === 'GET' && pathname === '/api/hotels') {
      sendJson(response, 200, Object.values(await readHotels()));
      return;
    }

    const match = pathname.match(hotelRoute);
    if (!match) {
      sendJson(response, 404, { error: 'Hotel not found.' });
      return;
    }

    const slug = decodeURIComponent(match[1]);
    const hotels = await readHotels();
    if (!hotels[slug]) {
      sendJson(response, 404, { error: 'Hotel not found.' });
      return;
    }

    if (request.method === 'GET') {
      sendJson(response, 200, hotels[slug]);
      return;
    }

    if (request.method !== 'PUT') {
      response.setHeader('Allow', 'GET, PUT');
      sendJson(response, 405, { error: 'Method not allowed.' });
      return;
    }

    const updatedHotel = await readRequestJson(request);
    if (
      !updatedHotel ||
      typeof updatedHotel !== 'object' ||
      Array.isArray(updatedHotel) ||
      updatedHotel.slug !== slug ||
      typeof updatedHotel.title !== 'string' ||
      !updatedHotel.title.trim() ||
      typeof updatedHotel.destination !== 'string'
    ) {
      sendJson(response, 400, {
        error: 'Hotel data must include its original slug, a title, and a destination.'
      });
      return;
    }

    for (const field of ['gallery', 'amenities', 'rooms', 'reviews', 'faqs']) {
      if (updatedHotel[field] !== undefined && !Array.isArray(updatedHotel[field])) {
        sendJson(response, 400, { error: `${field} must be an array.` });
        return;
      }
    }

    if (updatedHotel.mealPlanRates !== undefined) {
      const rates = updatedHotel.mealPlanRates;
      if (!rates || typeof rates !== 'object' || Array.isArray(rates)) {
        sendJson(response, 400, { error: 'mealPlanRates must be an object.' });
        return;
      }

      for (const code of ['CP', 'MAP', 'AP']) {
        if (typeof rates[code] !== 'number' || !Number.isFinite(rates[code]) || rates[code] < 0) {
          sendJson(response, 400, {
            error: `${code} meal-plan rate must be a number greater than or equal to zero.`
          });
          return;
        }
      }
    }

    hotels[slug] = updatedHotel;

    const temporaryFile = path.join(
      path.dirname(hotelDetailsFile),
      `hotelDetails.${process.pid}.${Date.now()}.tmp`
    );
    await writeFile(temporaryFile, `${JSON.stringify(hotels, null, 2)}\n`, 'utf8');
    await rename(temporaryFile, hotelDetailsFile);
    sendJson(response, 200, updatedHotel);
  } catch (error) {
    if (error.statusCode) {
      sendJson(response, error.statusCode, { error: error.message });
      return;
    }

    console.error('Hotel data API failed:', error);
    sendJson(response, 500, { error: 'Could not read or save hotel data.' });
  }
}

export default function hotelDataApi() {
  return {
    name: 'local-hotel-data-api',
    configureServer(server) {
      server.middlewares.use(handleHotelApi);
    }
  };
}
