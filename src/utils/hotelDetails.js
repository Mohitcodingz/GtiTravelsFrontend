import hotelDetailData from '../data/hotelDetailData.json';

export function applyHotelDetailData(hotel) {
  const overrides = hotelDetailData[hotel.slug];
  if (!overrides) return hotel;

  const merged = { ...hotel };
  for (const [field, value] of Object.entries(overrides)) {
    if (value === null) {
      delete merged[field];
    } else {
      merged[field] = value;
    }
  }
  return merged;
}
