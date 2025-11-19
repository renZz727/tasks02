export function intersection(first: number[], sec: number[]): number[] {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < sec.length; j++) {
      if (first[i] === sec[j]) result.push(first[i]);
    }
  }
  return result;
}
