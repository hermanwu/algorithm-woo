'''
Given an array nums, write a function to move all 0's to the end of it
while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function,
nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

'''

class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        # zero is the j index
        zero = 0;

        for i in range(len(nums)):
            if nums[i] != 0:
                nums[zero], nums[i] = nums[i], nums[zero]
                zero += 1


    def moveZeroes2(self, nums):
        # write your code here
        if nums is None or len(nums) <= 1:
            return

        left, right = 0, 0

        while right <= len(nums) - 1:
            if nums[right] != 0:
                nums[left] = nums[right]
                left += 1
            right += 1

        while left <= len(nums) - 1:
            nums[left] = 0
            left += 1