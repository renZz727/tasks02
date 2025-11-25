export function isSorted(arr: number[]): string {
  let cur = arr[0];
  let incFlag = 0;
  let desFlag = 0;
  for (let i = 1; i < arr.length; i++) {
    if (cur < arr[i]) {
      desFlag = 1;
      cur = arr[i];
    } else {
      incFlag = 1;
      cur = arr[i];
    }
  }
  if (incFlag === 1 && desFlag === 1) return "unsorted";
  else if (incFlag === 0) return "ascending";
  else return "descending";
}

