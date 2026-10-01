import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const hotelsFile = fileURLToPath(new URL('../src/data/hotels.json', import.meta.url));
const projectUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!projectUrl || !serviceKey) {
  throw new Error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before seeding hotel data.');
}

const source = await readFile(hotelsFile, 'utf8');
const hotels = JSON.parse(source.replace(/^\uFEFF/, ''));
const response = await fetch(
  `${projectUrl.replace(/\/+$/, '')}/rest/v1/hotel_records?on_conflict=slug`,
  {
    method: 'POST',
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal'
    },
    body: JSON.stringify(hotels.map((hotel) => ({ slug: hotel.slug, data: hotel })))
  }
);

if (!response.ok) {
  throw new Error(`Could not seed hotel data (${response.status}): ${await response.text()}`);
}

console.log(`Seeded ${hotels.length} hotels into Supabase.`);
