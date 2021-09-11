function combinationSum(candidates, target) {
  if (!candidates) {
      return [];
  }
  let copyedCandidates = candidates.sort();

  let results = [];

  dfs(results, [], 0, target, copyedCandidates);

  return results;
}

function dfs(results, local, startIndex, target, candidates) {
  if (target === 0) {
    results.push(local.slice());
    return;
  }

  if (target < 0) {
    return 
  }

  for (let i = startIndex; i < candidates.length; i++) {
    local.push(candidates[i]);
    dfs(results, local, i, target - candidates[i], candidates);
    local.pop();
  }

}


const expectedResult = [
  [2,2,3],
  [7]
]
console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2, 3, 5], 8));
