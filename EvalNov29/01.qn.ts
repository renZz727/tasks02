type Expected =
  | {
      maxTemp: number;
      minTemp: number;
      averageTemp: number;
      hottestPoint: number[];
      coldestPoint: number[][];
    }
  | string;
type Input = number[][];
interface Heatmap {
  expected: Expected | string;
  input: Input;
}
export function analyzeHeatmap(heatmap: Heatmap[]) {
  if (heatmap.length === 0) return "empty heat map";
  let maxTemp = Number.MIN_VALUE;
  let minTemp = Number.MAX_VALUE;
  let coldestI;
  let coldestJ;
  let hotestI;
  let hotestJ;
  let totalTemp = 0;
  let count = 0;

  for (let i = 0; i < heatmap.length; i++) {
    for (let j = 0; j < heatmap[i].length; j++) {
      if (heatmap[i][j] > maxTemp) {
        maxTemp = heatmap[i][j];
        hotestI = i;
        hotestJ = j;
      }
      if (heatmap[i][j] < minTemp) {
        minTemp = heatmap[i][j];
        coldestI = i;
        coldestJ = j;
      }
      totalTemp += heatmap[i][j];
      count++;
    }
  }
  return {
    maxTemp: maxTemp,
    minTemp: minTemp,
    averageTemp: Number((totalTemp / count).toFixed(1)),
    hottestPoint: [hotestI, hotestJ],
    coldestPoint: [coldestI, coldestJ],
  };
}
