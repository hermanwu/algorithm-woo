'''
Description
Given an array of integers, find how many pairs in the array such that their sum is less than or equal to a specific target number. Please return the number of pairs.

Have you met this question in a real interview?
Example
Given nums = [2, 7, 11, 15], target = 24.
Return 5.
2 + 7 < 24
2 + 11 < 24
2 + 15 < 24
7 + 11 < 24
7 + 15 < 25
'''

class Solution:
    """
    @param nums: an array of integer
    @param target: an integer
    @return: an integer
    """
    def twoSum5(self, nums, target):
        # write your code here
        nums.sort()
        l, r  = 0, len(nums) - 1
        count = 0

        while l < r:
            value = nums[l] + nums[r]
            if value > target:
                r -= 1
            else:
                count += r - l
                l += 1
        return count