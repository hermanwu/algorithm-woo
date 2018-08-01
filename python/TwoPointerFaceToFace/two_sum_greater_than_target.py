'''
Description
Given an array of integers, find how many pairs in the array such that their sum is bigger than a specific target number. Please return the number of pairs.

使用 O(1) 的额外空间和 O(nlogn) 的时间。

Have you met this question in a real interview?
Example
Given numbers = [2, 7, 11, 15], target = 24. Return 1. (11 + 15 is the only pair)

Challenge
Do it in O(1) extra space and O(nlogn) time.

'''

class Solution:
    """
    @param nums: an array of integer
    @param target: An integer
    @return: an integer
    """
    def twoSum2(self, nums, target):
        # write your code here
        nums.sort()
        l, r = 0, len(nums) - 1
        count = 0
        while l < r:
            if nums[l] + nums[r] <= target:
                l += 1
            else:
                count += r - l
                r -= 1

        return count