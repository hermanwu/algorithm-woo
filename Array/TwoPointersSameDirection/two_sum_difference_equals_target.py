'''
Description
Given an array of integers, find two numbers that their difference equals to a target value.
where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.

It's guaranteed there is only one available solution

Have you met this question in a real interview?
Example
Given nums = [2, 7, 15, 24], target = 5
return [1, 2] (7 - 2 = 5)

'''

class Solution:
    """
    @param nums: an array of Integer
    @param target: an integer
    @return: [index1 + 1, index2 + 1] (index1 < index2)
    """
    def twoSum7(self, numbers, target):
        # write your code here
        n = len(numbers)
        if n == 0:
            return []
        nums = list(zip(numbers, range(n)))
        nums.sort()
        target = abs(target)
        for start in range(0, n - 1):
            end = start + 1
            while end <= n - 1 and nums[end][0] - nums[start][0] < target:
                end += 1
            if nums[end][0] - nums[start][0] == target:
                return sorted([nums[start][1] + 1, nums[end][1] + 1])
        return []