import { timingSafeEqual } from 'node:crypto';

const tableUrl = () => {
  const projectUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!projectUrl || !serviceKey) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured.');
  }

  return {
    url: `${projectUrl.replace(/\/+$/, '')}/rest/v1/hotel_records`,
    serviceKey
  };
};

async function databaseRequest(path = '', options = {}) {
  const { url, serviceKey } = tableUrl();
  const response = await fetch(`${url}${path}`, {
    ...options,
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      ...options.headers
    }
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error('Supabase hotel data request failed:', response.status, detail);
    throw new Error('Hotel data storage request failed.');
  }

  return response.status === 204 ? null : response.json();
}

export function sendJson(response, status, data) {
  response.status(status).setHeader('Cache-Control', 'no-store');
  response.json(data);
}

export async function listHotels() {
  const rows = await databaseRequest('?select=data&order=slug.asc');
  return rows.map((row) => row.data);
}

export async function getHotel(slug) {
  const rows = await databaseRequest(
    `?select=data&slug=eq.${encodeURIComponent(slug)}&limit=1`
  );
  return rows[0]?.data ?? null;
}

export async function saveHotel(hotel) {
  await databaseRequest('?on_conflict=slug', {
    method: 'POST',
    headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify([{ slug: hotel.slug, data: hotel }])
  });
}

export function isAuthorized(request) {
  const configuredPassword = process.env.HOTEL_ADMIN_PASSWORD;
  if (!configuredPassword) {
    return false;
  }

  const providedPassword = request.headers['x-admin-password'];
  if (typeof providedPassword !== 'string') {
    return false;
  }

  const expected = Buffer.from(configuredPassword);
  const provided = Buffer.from(providedPassword);
  return expected.length === provided.length && timingSafeEqual(expected, provided);
}
