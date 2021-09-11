function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const visited = new Array(nums.length).fill(false);
  const results = [];

  helper(results, nums, [], visited);

  return results;
}

function helper(
  results: number[][],
  nums: number[],
  current: number[],
  visited: boolean[],
): void {
  if (current.length === nums.length) {
    results.push(current);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }

    if (i !== 0 && nums[i] === nums[i - 1] && visited[i - 1] === false) {
      continue;
    }

    visited[i] = true;
    const next = current.slice();
    next.push(nums[i]);
    helper(results, nums, next, visited);
    visited[i] = false;
  }
}
