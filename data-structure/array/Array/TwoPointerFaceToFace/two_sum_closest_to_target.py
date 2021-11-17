'''

533. Two Sum - Closest to target
Given an array nums of n integers, find two integers in nums such that the sum is closest to a given number, target.

Return the difference between the sum of the two integers and the target.

Example
Given array nums = [-1, 2, 1, -4], and target = 4.

The minimum difference is 1. (4 - (2 + 1) = 1).

Challenge
Do it in O(nlogn) time complexity.

'''

class Solution:
    """
    @param nums: an integer array
    @param target: An integer
    @return: the difference between the sum and the target
    """
    def twoSumClosest(self, nums, target):
        # write your code here
        start, end = 0, len(nums) - 1
        nums.sort()

        import sys
        # diff = 0x7fffffff
        diff = sys.maxsize

        while start < end:
            value = nums[start] + nums[end]

            if value > target:
                diff = min(diff, value - target)
                end -= 1
            else:
                diff = min(diff, target - value)
                start += 1

        return diff
