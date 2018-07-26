'''


14. First Position of Target
For a given sorted array (ascending order) and a target number, find the first index of this number in O(log n) time complexity.

If the target number does not exist in the array, return -1.

Example
If the array is [1, 2, 3, 3, 4, 5, 10], for given target 3, return 2.

Challenge
If the count of numbers is bigger than 2^32, can your code work properly?

'''

class Solution:
    """
    @param nums: The integer array.
    @param target: Target to find.
    @return: The first position of target. Position starts from 0.
    """
    def binarySearch(self, nums, target):
        # write your code here
        # write your code here
        if len(nums) == 0 or nums is None:
            return -1
        start, end = 0, len(nums) - 1

        if target < nums[start] or target > nums[end]:
            return -1

        while start + 1 < end:
            mid = start + (end - start) // 2
            if target <= nums[mid]:
                end = mid
            else:
                start = mid

        if target == nums[start]:
            return start
        elif target == nums[end]:
            return end
        else:
            return -1