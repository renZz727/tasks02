function linearSearch(arr, target) {
    for(let i = 0; i< arr.length;i++) {
        if(arr[i] === key) {
            return `found at index ${i}`;
        }
    }
    return 'not found'
}
const arr = [4, 3, 1, 2, 5, 9, 7, 10, 6];
console.log(linearSearch(arr, 2));
console.log(linearSearch(arr, 11))