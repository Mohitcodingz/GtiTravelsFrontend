import { listHotels, sendJson } from '../_lib/hotelStore.js';

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    sendJson(response, 405, { error: 'Method not allowed.' });
    return;
  }

  try {
    sendJson(response, 200, await listHotels());
  } catch (error) {
    console.error('Could not load hotel catalog:', error);
    sendJson(response, 500, { error: 'Could not load hotel data.' });
  }
}
