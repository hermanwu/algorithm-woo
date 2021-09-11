'''
Description
Given an array of n integer, and a moving window(size k), move the window at each iteration from the start of the array, find the sum of the element inside the window at each moving.


Example
For array [1,2,7,8,5], moving window size k = 3.
1 + 2 + 7 = 10
2 + 7 + 8 = 17
7 + 8 + 5 = 20
return [10,17,20]

'''

class Solution:
  def winSum(self, num, k):
    if not num or k <= 0:
      return []
    
    wsum = sum(num[:k])

    result = [wsum]

    for i in range(k, len(nums)):
      wsum = wsum + nums[i] - nums[i - k]
      result.append(wsum)

    return result