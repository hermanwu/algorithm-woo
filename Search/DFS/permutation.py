class Solution:
  def permute(self, nums):
    if not nums:
      return [[]]
    
    result = []
    self.dfs(nums, [], result)

  def dfs(self, nums, localPermute, result):
    if not nums:
      result.append(localPermute[:])
    
    for i in range(len(nums)):
      ele = nums.pop(i)
      localPermute.append(ele)
      self.dfs(nums, localPermute, result)
      localPermute.pop()
      nums.insert(i, ele)