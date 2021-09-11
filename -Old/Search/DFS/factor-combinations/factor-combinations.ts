function getFactors(n: number): number[][] {
  const results = [];

  backtrack(results, [], n, 2);

  return results;
}

function backtrack(
  results: number[][],
  current: number[],
  remain: number,
  start: number
) {
  if (remain === 1) {
    if (current.length > 1) {
      results.push(current.slice());
    }
  }

  for (let i = start; i <= remain; i++) {
    if (remain % i === 0) {
      current.push(i);

      backtrack(results, current, remain / i, i);

      current.pop();
    }
  }
}
