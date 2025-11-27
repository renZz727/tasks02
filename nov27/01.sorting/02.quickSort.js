function partition(arr, low, high) {
  const pivot = arr[high];
  let k = low;
  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      let temp = arr[k];
      arr[k] = arr[i];
      arr[i] = temp;
      k++;
    }
  }
  arr[high] = arr[k];
  arr[k] = pivot;
  return k;
}
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const mid = partition(arr, low, high);
    quickSort(arr, low, mid - 1);
    quickSort(arr, mid + 1, high);
  }
  return arr;
}
const arr = [4, 3, 1, 2, 5, 9, 7, 10, 6];
console.log(quickSort(arr));
