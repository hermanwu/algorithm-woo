class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """

        temp = 1
        n = len(nums)
        output = []

        for i in range(0, n):
            output.append(temp)
            temp = temp * nums[i]
        temp = 1
        for i in range(n - 1, -1, -1):
            output[i] = output[i] * temp;
            temp = temp * nums[i]
        return output