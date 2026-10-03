import React, { useEffect, useState } from 'react';
import { getMealPlanRates, getStartingRate, mealPlanOptions } from '../utils/mealPlans';

export default function HotelDashboardPage() {
  const [hotels, setHotels] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState('');
  const [hotelJson, setHotelJson] = useState('');
  const [mealPlanRates, setMealPlanRates] = useState({});
  const [status, setStatus] = useState('Loading hotel data…');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let isCurrent = true;

    fetch('/api/hotels')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Could not load hotels (${response.status}).`);
        }
        return response.json();
      })
      .then((data) => {
        if (!isCurrent) return;
        setHotels(data);
        setSelectedSlug(data[0]?.slug || '');
        setStatus(data.length ? 'Choose a hotel to edit.' : 'No hotels were found.');
      })
      .catch((error) => {
        if (!isCurrent) return;
        setStatus(error.message);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  const selectedHotel = hotels.find((hotel) => hotel.slug === selectedSlug);

  useEffect(() => {
    setHotelJson(selectedHotel ? JSON.stringify(selectedHotel, null, 2) : '');
    setMealPlanRates(selectedHotel ? getMealPlanRates(selectedHotel) : {});
  }, [selectedHotel]);

  const saveHotel = async (event) => {
    event.preventDefault();
    let updatedHotel;

    try {
      updatedHotel = JSON.parse(hotelJson);
    } catch {
      setStatus('Cannot save: the hotel data is not valid JSON.');
      return;
    }

    if (!selectedSlug || updatedHotel.slug !== selectedSlug) {
      setStatus('Cannot save: do not change the hotel slug.');
      return;
    }

    const normalizedRates = {};
    for (const { code } of mealPlanOptions) {
      const rate = Number(mealPlanRates[code]);
      if (!Number.isFinite(rate) || rate < 0) {
        setStatus(`Cannot save: ${code} meal-plan rate must be zero or greater.`);
        return;
      }
      normalizedRates[code] = rate;
    }
    updatedHotel.mealPlanRates = normalizedRates;
    const startingRate = getStartingRate(updatedHotel);
    updatedHotel.rateNum = startingRate;
    updatedHotel.startingPrice = startingRate
      ? `₹${startingRate.toLocaleString('en-IN')}`
      : 'Rates on request';

    setSaving(true);
    setStatus('Saving…');

    try {
      const response = await fetch(`/api/hotels/${encodeURIComponent(selectedSlug)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedHotel)
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || `Could not save hotel (${response.status}).`);
      }

      setHotels((currentHotels) =>
        currentHotels.map((hotel) => (hotel.slug === selectedSlug ? result : hotel))
      );
      setHotelJson(JSON.stringify(result, null, 2));
      setStatus('Saved to the local hotel data file. Refresh the hotel detail page to see changes.');
    } catch (error) {
      setStatus(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main>
      <h1>Hotel detail data</h1>
      <p>
        Select a property and edit all of its detail-page data. Every hotel&apos;s
        complete detail-page record is stored in{' '}
        <code>src/data/hotelDetailData.json</code>. Hotel listing data remains
        separate.
      </p>

      <label htmlFor="hotel-select">Hotel</label>{' '}
      <select
        id="hotel-select"
        value={selectedSlug}
        onChange={(event) => setSelectedSlug(event.target.value)}
        disabled={!hotels.length}
      >
        {hotels.map((hotel) => (
          <option key={hotel.slug} value={hotel.slug}>
            {hotel.title} ({hotel.destination})
          </option>
        ))}
      </select>

      {selectedHotel && (
        <p>
          <a href={`/hotel/${selectedSlug}/`} target="_blank" rel="noreferrer">
            Open this hotel detail page
          </a>
        </p>
      )}

      <fieldset disabled={!selectedHotel || saving}>
        <legend>Meal-plan rates per night (enter 0 to disable a button)</legend>
        {mealPlanOptions.map(({ code, name, label }) => (
          <div key={code}>
            <label htmlFor={`meal-plan-${code}`}>
              {name} {label} (₹)
            </label>{' '}
            <input
              id={`meal-plan-${code}`}
              type="number"
              min="0"
              step="1"
              value={mealPlanRates[code] ?? ''}
              onChange={(event) =>
                setMealPlanRates((current) => ({
                  ...current,
                  [code]: event.target.value
                }))
              }
            />
          </div>
        ))}
        <p>The first meal plan with a rate above 0 is selected by default.</p>
      </fieldset>

      <form onSubmit={saveHotel}>
        <label htmlFor="hotel-json">Hotel data (JSON)</label>
        <br />
        <textarea
          id="hotel-json"
          rows="32"
          cols="100"
          value={hotelJson}
          onChange={(event) => setHotelJson(event.target.value)}
          spellCheck="false"
          disabled={!selectedHotel || saving}
        />
        <br />
        <button type="submit" disabled={!selectedHotel || saving}>
          {saving ? 'Saving…' : 'Save changes'}
        </button>
      </form>

      <p role="status">{status}</p>
      <p>
        Run <code>npm run dev</code> and open <code>http://localhost:3000/admin/</code>.
        You can edit the selected complete record in this dashboard or directly
        edit its slug entry in <code>src/data/hotelDetailData.json</code>.
      </p>
    </main>
  );
}
