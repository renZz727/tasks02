export function celsiusToFahrenheit(c : number): string {
  const f = (c * (9 / 5) + 32).toFixed(1);
  return f + "°F";
}

