/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  let res = [];
  let dfs = function (id, n, comb) {
    if (n == 0) {
      res.push(comb);
      return;
    }

    for (let i = id; i < candidates.length; i++) {
      if (candidates[i] <= n) {
        dfs(i + 1, n - candidates[i], [...comb, candidates[i]]);
      }
      while (candidates[i + 1] == candidates[i]) i++;
    }
    return res;
  };

  dfs(0, target, []);
  return res;
};
