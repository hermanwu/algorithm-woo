'''
Description
Given a list of integers, which denote a permutation.

Find the next permutation in ascending order.

The list may contains duplicate integers.

Have you met this question in a real interview?
Example
For [1,3,2,3], the next permutation is [1,3,3,2]

For [4,3,2,1], the next permutation is [1,2,3,4]
'''

def nextPermutation(self, nums):
  # write your code here
  # if not nums: return
  i = len(nums) - 1
  while i >= 1 and nums[i - 1] >= nums[i]:
    i -= 1
  if i == 0:
    nums[:] = nums[::-1]
    return nums

  for j in range(len(nums)-1, i-1, -1):
    if nums[j] > nums[i-1]:  # Not nums[j] > nums[i]
      nums[i-1], nums[j] = nums[j], nums[i-1]
      break
  # Reverse in place.
  nums[i:] = nums[i:][::-1]

  return nums