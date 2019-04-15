class Solution:
  def stringPermutation2(self, str):
      if not string:
        return
      
      results = []
      self.dfs(sorted(list(str)), [], results)
      return results

  def dfs(self, string, permutation, permutations):
    if not string:
      permutations.append(''.join(permutation[:]))
      return

    for i in range(len(string)):
      if i and string[i] == string[i - 1]:
        continue
      
      ele = string.pop(i)
      permutation.append(ele)
      self.dfs(string, permutation, permutations)
      permutation.pop()
      string.inert(i, ele)