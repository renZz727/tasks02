export function sumOfUniqueNumbers(arr: number[]): number {
  let sum = 0;
  const dup = arr.filter((num, index) => arr.indexOf(arr[index]) !== index);
  for (let num of arr) {
    if (!dup.includes(num)) sum += num;
  }
  return sum;
}
