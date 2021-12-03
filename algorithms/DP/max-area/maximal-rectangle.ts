/**
 * Leetcode: https://leetcode.com/problems/maximal-rectangle/
 *
 * Given a rows x cols binary matrix filled with 0's and 1's,
 * find the largest rectangle containing only 1's and return
 * its area.
 */
function maximalRectangle(matrix: string[][]): number {
  const h = matrix.length;
  const w = matrix[0].length;

  // max area that has 1 at the dp[i][j];
  const dp: number[][] = [];

  let result = 0;

  for (let i = 0; i < h; i++) {
    dp.push([]);

    for (let j = 0; j < w; j++) {
      if (matrix[i][j] === "1") {
        dp[i].push(1);
      } else {
        dp[i].push(0);
      }
    }
  }

  for (let i = 1; i < h; i++) {
    if (dp[i][0] === 1) {
      dp[i][0] = Math.max(dp[i - 1][0] + 1, 1);
    }
  }

  for (let j = 1; j < w; j++) {
    if (dp[0][j] === 1) {
      dp[0][j] = Math.max(dp[0][j - 1] + 1, 1);
    }
  }

  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      if (dp[i][j] === 1) {
        dp[i][j] = Math.max(
          1 +
            dp[i - 1][j - 1] +
            (dp[i][j - 1] - dp[i - 1][j - 1]) +
            (dp[i - 1][j] - dp[i - 1][j - 1]),
          1,
          dp[i][j - 1] - dp[i - 1][j - 1] + 1,
          dp[i - 1][j] - dp[i - 1][j - 1] + 1
        );

        result = Math.max(dp[i][j], result);
      }
    }
  }

  return result;
}

/**
 * 1, 0, 1, 0, 0
 * 2  0  2
 * 3
 * 4
 */

console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
); // 6

// console.log(maximalRectangle([])); // 0

// console.log(maximalRectangle([['0']])); // 0

// console.log(maximalRectangle([["1"]])) // 1
