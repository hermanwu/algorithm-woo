'''
Description
Find the kth smallest numbers in an unsorted integer array.

Have you met this question in a real interview?
Example
Given [3, 4, 1, 2, 5], k = 3, the 3rd smallest numbers are [1, 2, 3].

Challenge
An O(nlogn) algorithm is acceptable, if you can do it in O(n), that would be great.
'''

class Solution:
    """
    @param k: An integer
    @param nums: An integer array
    @return: kth smallest element
    """
    def kthSmallest(self, k, nums):
        # write your code here
        return self.quickSelect(nums, 0, len(nums) - 1, k-1)

    def quickSelect(self, arr, start, end, k):
        result = self.quickSortHelper(arr, start, end)
        if result[0] == result[1]:
            return arr[result[0]]

        if result[1] >= k and start <= result[1]:
            return self.quickSelect(arr, start, result[1], k)
        elif result[0] <= k and end >= result[0]:
            return self.quickSelect(arr, result[0], end, k)
        else:
            return arr[k]

    def quickSortHelper(self, arr, start, end):
        if start >= end:
            return [start, end]

        pivot = arr[start]
        left, right = start, end

        while left <=right:
            while left <= right and arr[left] < pivot:
                left += 1

            while left <= right and arr[right] > pivot:
                right -= 1

            if left <= right:
                arr[left], arr[right] = arr[right], arr[left]
                left += 1
                right -= 1
        return [left, right]