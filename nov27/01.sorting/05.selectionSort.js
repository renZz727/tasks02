function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    let temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
  }
  return arr;
}
const arr = [4, 3, 1, 2, 5, 9, 7, 10, 6];
console.log(selectionSort(arr));
