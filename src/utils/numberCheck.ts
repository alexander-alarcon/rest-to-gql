export function checkYear(year: string) {
  let validYear = year;
  const currentYear = new Date().getFullYear();
  if (isNaN(+year) || +year < 1950 || +year > currentYear) {
    validYear = currentYear.toString();
  }

  return validYear;
}

export function checkRound(round: number) {
  let validRound = round;
  if (round < 1 || round > 100) {
    validRound = 1;
  }
  return validRound;
}
