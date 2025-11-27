function binaryExponentiation(base, exp) {
  let result = 1;
  let binary = exp.toString(2);

  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      result *= base;
    }
    base *= base;
  }
  return result;
}

console.log(binaryExponentiation(3, 13));
console.log(binaryExponentiation(2, 13));
