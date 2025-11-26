export function toTimeText(sec: number): string {
  let result = "";
  while (sec > 0) {
    if (sec >= 3600) {
      result += Math.floor(sec / 3600) + " Hour ";
      sec = sec % 3600;
    } else if (sec >= 60) {
      result += Math.floor(sec / 60) + " Minutes ";
      sec = sec % 60;
    } else {
      result += sec + " seconds ";
      return result.trim();
    }
  }
  return result.trim();
}

// console.log(toTimeText(9000)); // 2:30
// console.log(toTimeText(8000)) // 2 Hour 13 Minutes 20 seconds
// console.log(toTimeText(11111)); // 3: 5
// console.log(toTimeText(60))
// console.log(toTimeText(23))
