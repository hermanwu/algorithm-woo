'''
Description
Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose three edges length is the three numbers that we find?

Have you met this question in a real interview?
Example
Given array S = [3,4,6,7], return 3. They are:

[3,4,6]
[3,6,7]
[4,6,7]
Given array S = [4,4,4,4], return 4. They are:

[4(1),4(2),4(3)]
[4(1),4(2),4(4)]
[4(1),4(3),4(4)]
[4(2),4(3),4(4)]

'''

# for i in range(len(a) - 1, 1, -1)

class Solution:
    """
    @param S: A list of integers
    @return: An integer
    """
    def triangleCount(self, S):
        # write your code here
        S.sort()
        res = 0
        for i in range(len(S) - 1, 1, -1):
            res += self.count(S, 0, i-1, S[i])
        return res

    def count(self, nums, start, end, target):
        left, right = start, end
        ans = 0
        while left < right:
            if nums[left] + nums[right] > target:
                ans += right - left
                right -= 1
            else:
                left += 1
        return ans