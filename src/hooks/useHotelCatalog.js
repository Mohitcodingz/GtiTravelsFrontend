import { useEffect, useState } from 'react';
import hotelsData from '../data/hotels.json';

export default function useHotelCatalog() {
  const [hotels, setHotels] = useState(hotelsData);

  useEffect(() => {
    if (!import.meta.env.DEV) return undefined;

    let isCurrent = true;
    fetch('/api/hotels')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Could not load hotel data (${response.status}).`);
        }
        return response.json();
      })
      .then((data) => {
        if (isCurrent) setHotels(data);
      })
      .catch((error) => {
        console.error('Could not load local hotel catalog:', error);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  return hotels;
}
