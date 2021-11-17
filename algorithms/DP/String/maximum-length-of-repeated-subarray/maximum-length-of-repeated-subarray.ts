function findLength(A: number[], B: number[]): number {
  let results = [];
  for (let i = 0; i <= A.length; i++) {
    results.push(new Array(B.length + 1).fill(0));
  }

  let maxLength = 0;

  for (let i = 0; i <= A.length; i++) {
    for (let j = 0; j <= B.length; j++) {
      if (i === 0 || j === 0) {
        results[i][j] = 0;
      } else {
        if (A[i - 1] === B[j - 1]) {
          results[i][j] = results[i - 1][j - 1] + 1;
          maxLength = Math.max(maxLength, results[i][j]);
        }
      }
    }
  }

  return maxLength;
}
