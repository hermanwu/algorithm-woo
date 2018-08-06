'''
Description
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

You are not suppose to use the library's sort function for this problem.
You should do it in-place (sort numbers in the original array).

Have you met this question in a real interview?
Example
Given [1, 0, 1, 2], sort it in-place to [0, 1, 1, 2].

Challenge
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?

'''

class Solution:
    """
    @param nums: A list of integer which is 0, 1 or 2
    @return: nothing
    """
    def sortColors(self, nums):
        # write your code here
        left, right = 0, len(nums) - 1
        i = 0
        while i <= right:
            if nums[i] == 1:
                i += 1

            elif nums[i] == 0:
                nums[left], nums[i] = nums[i], nums[left]
                i += 1
                left += 1

            elif nums[i] == 2:
                nums[right], nums[i] = nums[i], nums[right]
                right -= 1