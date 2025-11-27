function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let k = i;
    while (arr[k] < arr[k - 1]) {
      let temp = arr[k];
      arr[k] = arr[k - 1];
      arr[k - 1] = temp;
      k--;
    }
  }
  return arr;
}
const arr = [4, 3, 1, 2, 5, 9, 7, 10, 6];
console.log(insertionSort(arr));
