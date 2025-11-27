function polynomialEvaluation(poly, coff) {
  let result = poly[0];
  for (let i = 1; i < poly.length; i++) {
    result = result * coff + poly[i];
  }
  return result;
}

console.log(polynomialEvaluation([2, -6, 2, -1], 3));
console.log(polynomialEvaluation([2, 0, 3, 1], 2));
