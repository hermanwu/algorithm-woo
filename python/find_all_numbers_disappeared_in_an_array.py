class Solution(object):
    def findDisappearedNumbers(self, nums):

        """
        :type nums: List[int]
        :rtype: List[int]
        """

        for num in nums:
            index = abs(num) - 1;
            if (nums[index] > 0):
                nums[index] = -nums[index];

        return [count + 1 for
                count, num in enumerate(nums)
                if num > 0]