import { getHotel, isAuthorized, saveHotel, sendJson } from '../_lib/hotelStore.js';

const mealPlanCodes = ['CP', 'MAP', 'AP'];

function isValidHotel(hotel, slug) {
  if (
    !hotel ||
    typeof hotel !== 'object' ||
    Array.isArray(hotel) ||
    hotel.slug !== slug ||
    typeof hotel.title !== 'string' ||
    !hotel.title.trim() ||
    typeof hotel.destination !== 'string'
  ) {
    return false;
  }

  for (const field of ['gallery', 'amenities', 'rooms', 'reviews', 'faqs']) {
    if (hotel[field] !== undefined && !Array.isArray(hotel[field])) {
      return false;
    }
  }

  if (hotel.mealPlanRates !== undefined) {
    if (
      !hotel.mealPlanRates ||
      typeof hotel.mealPlanRates !== 'object' ||
      Array.isArray(hotel.mealPlanRates)
    ) {
      return false;
    }
    if (
      mealPlanCodes.some(
        (code) =>
          typeof hotel.mealPlanRates[code] !== 'number' ||
          !Number.isFinite(hotel.mealPlanRates[code]) ||
          hotel.mealPlanRates[code] < 0
      )
    ) {
      return false;
    }
  }

  return true;
}

export default async function handler(request, response) {
  const slug = request.query.slug;
  if (typeof slug !== 'string' || !slug) {
    sendJson(response, 400, { error: 'A hotel slug is required.' });
    return;
  }

  if (request.method === 'GET') {
    try {
      const hotel = await getHotel(slug);
      if (!hotel) {
        sendJson(response, 404, { error: 'Hotel not found.' });
        return;
      }
      sendJson(response, 200, hotel);
    } catch (error) {
      console.error('Could not load hotel:', error);
      sendJson(response, 500, { error: 'Could not load hotel data.' });
    }
    return;
  }

  if (request.method !== 'PUT') {
    response.setHeader('Allow', 'GET, PUT');
    sendJson(response, 405, { error: 'Method not allowed.' });
    return;
  }

  if (!process.env.HOTEL_ADMIN_PASSWORD) {
    sendJson(response, 503, { error: 'The hotel dashboard password is not configured.' });
    return;
  }
  if (!isAuthorized(request)) {
    sendJson(response, 401, { error: 'Incorrect dashboard password.' });
    return;
  }

  let hotel = request.body;
  if (typeof hotel === 'string') {
    try {
      hotel = JSON.parse(hotel);
    } catch {
      sendJson(response, 400, { error: 'Request body must contain valid JSON.' });
      return;
    }
  }
  if (!isValidHotel(hotel, slug)) {
    sendJson(response, 400, { error: 'Hotel data is invalid or does not match its slug.' });
    return;
  }

  try {
    if (!(await getHotel(slug))) {
      sendJson(response, 404, { error: 'Hotel not found.' });
      return;
    }
    await saveHotel(hotel);
    sendJson(response, 200, hotel);
  } catch (error) {
    console.error('Could not save hotel:', error);
    sendJson(response, 500, { error: 'Could not save hotel data.' });
  }
}
