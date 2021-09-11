'''
587. Two Sum - Unique pairs
Given an array of integers, find how many unique pairs in the array such that their sum is equal to a specific target number.
Please return the number of pairs.

Example
Given nums = [1,1,2,45,46,46], target = 47
return 2

1 + 46 = 47
2 + 45 = 47
'''

class Solution:
    """
    @param nums: an array of integer
    @param target: An integer
    @return: An integer
    """
    def twoSum62(self, nums, target):
        nums.sort()
        count = 0
        length = len(nums)
        left, right = 0, length - 1
        while left < right:
            if nums[left] + nums[right] == target:
                count+=1
                right -= 1
                left += 1
                # do increment after
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif nums[left] + nums[right] > target:
                right -= 1
            else:
                left += 1
        return count

    def twoSum6(self, nums, target):
        # write your code here
        i, j, count = 0, len(nums) - 1, 0
        nums.sort()

        while i < j:
            while i > 0 and i < j and nums[i] == nums[i - 1]:
                i += 1

            while j < len(nums) - 1 and i < j and nums[j] == nums[j + 1]:
                j -= 1

            if nums[i] + nums[j] == target:
                print(nums[i])
                print(nums[j])
                print('  ')
                # avoid center condition
                if j != i:
                    count += 1
                    i+=1
                    j-=1
            elif nums[i] + nums[j] > target:
                j-=1
            else:
                i+=1
        return count