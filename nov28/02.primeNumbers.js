function prime(n) {
  const prime = Array(n).fill(true);
  prime[0] = false;
  prime[1] = false;
  const result = [];

  for (let i = 2; i * i < n; i++) {
    if (prime[i]) {
      let k = i * i;
      while (k <= n) {
        prime[k] = false;
        k = i + k;
      }
    }
  }
  for(let i = 0;i < n;i++) {
    if(prime[i]) {
        result.push(i);
    }
  }
  return result;
}
console.log(prime(10));
console.log(prime(21));