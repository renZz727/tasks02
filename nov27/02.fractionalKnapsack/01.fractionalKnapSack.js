function fractionalKnapSack(values, weights, capacity) {
  let ratios = [];
  for (let i = 0; i < weights.length; i++) {
    ratios.push([values[i] / weights[i], i]);
  }
  ratios.sort((a, b) => {
    const ratio1 = a[0];
    const ratio2 = b[0];

    if (ratio1 > ratio2) return -1;
    else if (ratio1 < ratio2) return 1;
    return 0;
  });
  let k = 0;
  let totalValue = 0;
  let item = weights[ratios[k][1]];

  if (item > capacity) {
    return ((capacity / item) * values[ratios[k][1]]).toFixed(2);
  }
  while (item <= capacity) {
    totalValue +=
      capacity / item > 1
        ? values[ratios[k][1]]
        : (capacity / weights[ratios[k][1]]) * values[ratios[k][1]];

    capacity -=
      capacity / item > 1
        ? weights[ratios[k][1]]
        : (capacity / weights[ratios[k][1]]) * weights[ratios[k][1]];
    k++;
    if (k < weights.length) {
      item = weights[ratios[k][1]];
      if (capacity / item < 1)
        item = (capacity / weights[ratios[k][1]]) * weights[ratios[k][1]];
    } else capacity = -1;
  }
  return totalValue.toFixed(2);
}

console.log(fractionalKnapSack([60, 100, 120], [10, 20, 30], 50)); // 240.00
console.log(fractionalKnapSack([500], [30], 10)); // 166.66
