export function removeFalsyValues(arr: Array<unknown>) {
  return arr.filter((num) => Boolean(num));
}

