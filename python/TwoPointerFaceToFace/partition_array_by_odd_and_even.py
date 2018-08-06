'''
Description
Partition an integers array into odd number first and even number second.

Have you met this question in a real interview?
Example
Given [1, 2, 3, 4], return [1, 3, 2, 4]

Challenge
Do it in-place.

'''

class Solution:
    """
    @param: nums: an array of integers
    @return: nothing
    """
    def partitionArray(self, nums):
        # write your code here
        left, right = 0, len(nums) - 1
        while left < right:
            while left <= right and nums[left] % 2 == 1:
                left += 1
            while left <= right and nums[right] % 2 == 0:
                right -= 1

            if left <= right:
                nums[left], nums[right] = nums[right], nums[left]