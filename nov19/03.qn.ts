export function numberSeperator(num: number): string {
  let result = [];
  let res = "";
  if (num > 1000) {
    result.push(num % 1000);
    num = Math.floor(num / 1000);
    for (let i = num.toString().length - 1; i >= 0; i -= 2) {
      result.push(num % 100);
      num = Math.floor(num / 100);
    }
    res += result.toReversed().map((num) => {
      if (num !== result[result.length - 1])
        return num.toString().padStart(2, "0");
      else return num.toString();
    });
    return res;
  } else return num.toString();
}
