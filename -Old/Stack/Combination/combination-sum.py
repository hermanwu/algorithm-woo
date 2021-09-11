'''

135. Combination Sum
Given a set of candidate numbers (C) and a target number (T),
find all unique combinations in C where the candidate numbers sums
to T.

The same repeated number may be chosen from C unlimited
number of times.

Example
Given candidate set [2,3,6,7] and target 7, a solution set is:

[7]
[2, 2, 3]
Notice
All numbers (including target) will be positive integers.
Elements in a combination (a1, a2, … , ak) must be
in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
The solution set must not contain duplicate combinations.

'''

def combinationSum(self, candidates, target):
  candidates = list(set(candidates))
  candidates.sort()

  res = []
  self.Dfs(candidates, target, 0, [], res)

def dfs(self, candidates, target, start, curList, res):
  if target == 0:
    res.append(list(curList))
    return

  if target < candidates[start]:
    return

  for i in range(start, len(candidates)):
    curList.append(candidates[i])
    self.dfs(candidates, target - candidate[i], i, curList, res)
    curList.pop()
