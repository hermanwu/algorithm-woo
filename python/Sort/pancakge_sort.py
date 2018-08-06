'''
Description
Given an an unsorted array, sort the given array. You are allowed to do only following operation on array.

flip(arr, i): Reverse array from 0 to i
Unlike a traditional sorting algorithm, which attempts to sort with the fewest comparisons possible, the goal is to sort the sequence in as few reversals as possible.

You only call flip function.
Don't allow to use any sort function or other sort methods.

Java：you can call FlipTool.flip(arr, i)
C++： you can call FlipTool::flip(arr, i)
Python2&3 you can call FlipTool.flip(arr, i)

Have you met this question in a real interview?
Example
Given array = [6, 7, 10, 11, 12, 20, 23]
Use flip(arr, i) function to sort the array.
'''

"""
class FlipTool:

    @classmethod
    def flip(cls, arr, i):
        ...
"""
class Solution:
    """
    @param array: an integer array
    @return: nothing
    """
    def pancakeSort(self, array):
        # Write your code here
        for i in range(len(array) - 1, 0, -1):
            self.helper(array, i)

    def helper(self, array, end):
        max_val = array[0]
        max_index = 0
        for i in range(end + 1):
            if array[i] > max_val:
                max_val = array[i]
                max_index = i
        FlipTool.flip(array, max_index)
        FlipTool.flip(array, end)