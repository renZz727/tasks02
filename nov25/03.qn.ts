export function armstrong(num: number): boolean {
  const numbers = num.toString().split("");
  let result = 0;
  numbers.forEach((num) => {
    result += Math.pow(Number(num), numbers.length);
  });
  return num === result;
}

