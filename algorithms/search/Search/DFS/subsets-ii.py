class Solution:
  def subsetsWithDup(self, nums):
    if not nums:
      return [[]]

    result = []
    nums.sort()
    self.helper(nums, 0, [], result)

    return result

  def helper(self, nums, startIndex, subset, result):
    result.append(subset[:])
    for i in range(startIndex, len(nums)):
      if i > startIndex and nums[i] == nums[i - 1]:
        continue
      
      subset.append(nums[i])
      self.helper(nums, i + 1, subset, result)
      subset.pop()