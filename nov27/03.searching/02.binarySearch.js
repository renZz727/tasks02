function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target === arr[mid]) return `found at ${mid}`;
    else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "not found";
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 2));
