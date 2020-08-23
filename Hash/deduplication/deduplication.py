class Solution:
    """
    @param nums: an array of integers
    @return: the number of unique integers
    """

    def deduplication(self, nums):
        # write your code here

        map, result = {}, 0
        for num in nums:
            if num not in map:
                map[num] = True
                nums[result] = num
                result += 1
        return result
