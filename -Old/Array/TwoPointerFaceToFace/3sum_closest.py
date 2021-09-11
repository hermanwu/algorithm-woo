'''

59. 3Sum Closest
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
Return the sum of the three integers.

Example
For example, given array S = [-1 2 1 -4], and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Challenge
O(n^2) time, O(1) extra space

Notice
You may assume that each input would have exactly one solution.

'''


class Solution:
    """
    @param numbers: Give an array numbers of n integer
    @param target: An integer
    @return: return the sum of the three integers, the sum closest target.
    """

    def threeSumClosest(self, numbers, target):
        # write your code here
        numbers.sort()
        import sys
        min = sys.maxsize
        ans = numbers[0] + numbers[1] + numbers[2]

        for i in range(0, len(numbers) - 2):
            if numbers[i] == numbers[i - 1]:
                continue

            left = i + 1
            right = len(numbers) - 1
                
            while left < right:
                sum = numbers[i] + numbers[left] + numbers[right]
                if sum == target:
                    return sum
                if sum > target:
                    if (sum - target) < min:
                        min = sum - target
                        ans = sum
                    right -= 1
                else:
                    if (target - sum) < min:
                        min = target - sum
                        ans = sum
                    left += 1

        return ans
