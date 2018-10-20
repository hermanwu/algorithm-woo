'''
Description
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

Have you met this question in a real interview?
Example
Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2

3,2,1 → 1,2,3

1,1,5 → 1,5,1

Challenge
The replacement must be in-place, do not allocate extra memory.
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