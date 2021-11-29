/**
//https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/

Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).

Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table.

 * @param m 
 * @param n 
 * @param k 
 */

function findKthNumber(m: number, n: number, k: number): number {
  let low = 0;
  let high = m * n;

  while (low + 1 < high) {
    const mid = low + Math.floor((high - low) / 2);

    const count = countLessThanEqual(mid, m, n);

    if (count >= k) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return high;
}

function countLessThanEqual(target, rows, cols) {
  let count = 0;

  // we move row by row in the multiplication table
  // Each row contains at max (target / rowIndex) elements less than
  // or equal to target. The number of cols would limit it though.
  for (let i = 1; i <= rows; i++) {
    count += Math.min(Math.floor(target / i), cols);
  }

  return count;
}
