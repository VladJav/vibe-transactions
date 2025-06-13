// Calculates the number of days since the start of the current season
function getSeasonStart(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return new Date(year, 2, 1); // Spring
  if (month >= 5 && month <= 7) return new Date(year, 5, 1); // Summer
  if (month >= 8 && month <= 10) return new Date(year, 8, 1); // Autumn
  if (month === 11) return new Date(year, 11, 1); // Winter (Dec)
  return new Date(year - 1, 11, 1); // Winter (Jan, Feb)
}

export function getDayOfSeason(date: Date): number {
  const seasonStart = getSeasonStart(date);
  const diff = date.getTime() - seasonStart.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
}

export function calculateDailyPoints(dayOfSeason: number): number {
  if (dayOfSeason === 1) return 2;
  if (dayOfSeason === 2) return 3;
  let prev = 3, prevPrev = 2, current = 0;
  for (let i = 3; i <= dayOfSeason; i++) {
    current = Math.round(prevPrev + 0.6 * prev);
    prevPrev = prev;
    prev = current;
  }
  return current;
}

export function formatPoints(points: number): string {
  if (points >= 1000) return `${Math.round(points / 1000)}K`;
  return points.toString();
} 