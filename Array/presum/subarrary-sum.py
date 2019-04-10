'''
Description
中文
English
Given an integer array, find a subarray where the sum of numbers is zero. Your code should return the index of the first number and the index of the last number.

There is at least one subarray that it's sum equals to zero.

Have you met this question in a real interview?  
Example
Example 1:
	Input:  [-3, 1, 2, -3, 4]
	Output: [0, 2] or [1, 3].
	
	Explanation:
	return anyone that the sum is 0.

Example 2:
	Input:  [-3, 1, -4, 2, -3, 4]
	Output: [1,5]
'''

class Solution:
  def subarraySum(self, nums):
    if not nums:
      return []
    
    n = len(nums)
    cache = {0, -1} #trick
    presume = 0
    
    for i in range(len(nums)):
      presume += nums[i]
      if presume in cache:
        return [cache[presum] + 1, i]
      else:
        cache[presume] = i
      
    return []