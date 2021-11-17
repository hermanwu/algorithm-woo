class Solution:
  
  def combinationSum(self, candidates, target):
    if not candidates:
      return []
    
    candidates.sort()
    result = []
    self.dfs(candidates, 0, target, [], result)


  def dfs(self, candidates, startIndex, target, localCombos, result):
    if target == 0:
      result.append(localCombos[:])
      return
    
    for i in range(startIndex, len(candidates)):
      if i > startIndex and candidates == candidates[i - 1]:
        continue
      
      if candidates[i] > target:
        return

    localCombos.append(candidates[i])
    self.dfs(candidates, i, target - candidates[i], localCombos, result)
    localCombos.pop()