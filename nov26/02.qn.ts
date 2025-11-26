export function rotateArray(
  arr: number[] | string[],
  k: number
): number[] | string[] {
  let count = 0;
  while (count < k) {
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    count++;
  }
  return arr;
}
