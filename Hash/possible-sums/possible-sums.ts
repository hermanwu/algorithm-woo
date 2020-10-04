function possibleSums(coins, quantity) {
  const sums = new Set<number>();
  sums.add(0);

  for (let i = 0; i < coins.length; i++) {
    let sumsNow = Array.from(sums);

    for (let sum of sumsNow) {
      for (let j = 1; j <= quantity[i]; j++) {
        sums.add(sum + coins[i] * j);
      }
    }
  }

  return sums.size - 1;
}
