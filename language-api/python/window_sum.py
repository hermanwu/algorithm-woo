'''
Description
Given an array of n integer, and a moving window(size k), move the window at each iteration from the start of the array, find the sum of the element inside the window at each moving.

Have you met this question in a real interview?
Example
For array [1,2,7,8,5], moving window size k = 3.
1 + 2 + 7 = 10
2 + 7 + 8 = 17
7 + 8 + 5 = 20
return [10,17,20]
'''


class Solution:
    """
    @param nums: a list of integers.
    @param k: length of window.
    @return: the sum of the element inside the window at each moving.
    """

    def winSum(self, nums, k):
        # write your code here
        if nums is None or len(nums) == 0:
            return []

        left, right, sum = 0, k - 1, 0
        for i in range(k):
            sum += nums[i]

        result = [sum]

        while right < len(nums) - 1:
            sum = sum - nums[left] + nums[right + 1]
            left += 1
            right += 1
            result.append(sum)

        return result
