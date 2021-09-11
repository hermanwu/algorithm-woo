function changeWithDP(amount: number, coins: number[]): number {
  const dp = new Array(coins.length + 1).fill(0);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(amount + 1).fill(0);
  }

  // Assign top left.
  dp[0][0] = 1;

  for (let i = 1; i <= coins.length; i++) {
    // Add base condition.
    dp[i][0] = 1;
    for (let j = 1; j <= amount; j++) {
      // check codition
      // combine two previous states.
      dp[i][j] =
        dp[i - 1][j] + (j >= coins[i - 1] ? dp[i][j - coins[i - 1]] : 0);
    }
  }

  return dp[coins.length][amount];
}

function recursiveCall(
  coins: number[],
  target: number,
  index: number,
  solution: number[]
) {
  if (target === 0) {
    solution[0] += 1;
    return;
  }

  if (target < 0) {
    return;
  }

  for (let i = index, len = coins.length; i < len; i++) {
    recursiveCall(coins, target - coins[i], i, solution);
  }
}

function changeWithRecursive(amount: number, coins: number[]): number {
  const solution = [0];
  // Computationally intentsive.
  recursiveCall(coins, amount, 0, solution);
  return solution[0];
}
