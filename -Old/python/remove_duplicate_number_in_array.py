'''

521. Remove Duplicate Numbers in Array
Given an array of integers, remove the duplicate numbers in it.

You should:

Do it in place in the array.
Move the unique numbers to the front of the array.
Return the total number of the unique numbers.
Example
Given nums = [1,3,1,4,4,2], you should:

Move duplicate integers to the tail of nums => nums = [1,3,4,2,?,?].
Return the number of unique integers in nums => 4.
Actually we don't care about what you place in ?, we only care about the part which has no duplicate integers.

Challenge
Do it in O(n) time complexity.
Do it in O(nlogn) time without extra space.

'''

def deduplication(self, nums):
    # write your code here
    exist_nums = {}  # use dictionay but not list, because time complexity (see screenshot)
    pointer = 0

    for num in nums:
        if num not in exist_nums:
            exist_nums[num] = True
            nums[pointer] = num
            pointer += 1

    return pointer