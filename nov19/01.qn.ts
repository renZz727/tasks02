export function rotateMatrix(
  arr: number[][] | string[][]
): number[][] | string[][] | string {
  if (arr.length === 0) return "Input matrix is empty";
  const matrix = Array.from({ length: arr[0].length }, () =>
    Array(arr.length).fill(0)
  );

  let right = arr.length - 1;
  let top = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      matrix[top][right] = arr[i][j];
      top++;
    }
    top = 0;
    right--;
  }
  return matrix;
}
