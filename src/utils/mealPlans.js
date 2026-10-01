export const mealPlanOptions = [
  { code: 'CP', name: 'Free Breakfast', label: '(CP)' },
  { code: 'MAP', name: 'Breakfast & Dinner', label: '(MAP)' },
  { code: 'AP', name: 'All Meals', label: '(AP)' }
];

export function getMealPlanRates(hotel) {
  if (hotel.mealPlanRates) {
    return Object.fromEntries(
      mealPlanOptions.map(({ code }) => {
        const rate = Number(hotel.mealPlanRates[code]);
        return [code, Number.isFinite(rate) && rate > 0 ? rate : 0];
      })
    );
  }

  const baseRate = Number(hotel.rateNum);
  if (!Number.isFinite(baseRate) || baseRate <= 0) {
    return { CP: 0, MAP: 0, AP: 0 };
  }

  return { CP: baseRate, MAP: baseRate + 800, AP: baseRate + 1400 };
}

export function getDefaultMealPlan(rates) {
  return mealPlanOptions.find(({ code }) => rates[code] > 0)?.code || '';
}

export function getStartingRate(hotel) {
  const rates = getMealPlanRates(hotel);
  const availableRates = mealPlanOptions
    .map(({ code }) => rates[code])
    .filter((rate) => rate > 0);

  return availableRates.length ? Math.min(...availableRates) : 0;
}
