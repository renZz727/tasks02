function mergeSort(arr, left = 0, right = arr.length - 1, list = []) {
    const mid = Math.floor((left + right) / 2);
    while(left < right) {

    }
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid)
}


// console.log(mergeSort([70, 30, 50, 10]));