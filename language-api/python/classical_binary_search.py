'''

457. Classical Binary Search
Find any position of a target number in a sorted array. Return -1 if target does not exist.

Example
Given [1, 2, 2, 4, 5, 5].

For target = 2, return 1 or 2.

For target = 5, return 4 or 5.

For target = 6, return -1.

Challenge
O(logn) time

'''

class Solution:
    """
    @param: nums: An integer array sorted in ascending order
    @param: target: An integer
    @return: An integer
    """
    def findPosition(self, nums, target):
        # write your code here
        if len(nums) == 0 or nums is None:
            return -1
        start, end = 0, len(nums) - 1

        if target < nums[start] or target > nums[end]:
            return -1

        while start + 1 < end:
            mid = start + (end - start) // 2
            if target == nums[mid]:
                return mid
            elif target > nums[mid]:
                start = mid
            else:
                end = mid

        if target == nums[end]:
            return end
        elif target == nums[start]:
            return start
        else:
            return -1