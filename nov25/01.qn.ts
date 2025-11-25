export function removeDuplicates(arr: number[]) {
  return arr.filter((num, index) => arr.indexOf(num) === index);
}
