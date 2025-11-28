function findGcd(num1, num2) {
  while (num1 !== 0) {
    let temp = num1;
    num1 = num2 % num1;
    num2 = temp;
  }
  return num2;
}

console.log(findGcd(12, 20));
