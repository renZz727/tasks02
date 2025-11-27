function binaryExponentiation(base, exp) {
  base = BigInt(base);
  result = base;
  let binary = exp.toString(2);

  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === "1") {
      result *= result;
      result *= base;
    }
    result *= result;
  }
  return result;
}

console.log(binaryExponentiation(3, 13));
