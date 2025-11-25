export function mostFrequentElement(arr: number[]): number | null {
  const freqCount: Record<number, number> = {};
  let max = Number.MIN_VALUE;
  let mostFreq = null;
  arr.forEach((num) => {
    freqCount[num] = (freqCount[num] | 0) + 1;
    if (freqCount[num] > max) {
      mostFreq = num;
      max = freqCount[num];
    }
  });
  if (freqCount[mostFreq] > 1) return mostFreq;
  else return "no frequent elements";
}
