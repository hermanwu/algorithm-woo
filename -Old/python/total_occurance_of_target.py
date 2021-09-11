'''

462. Total Occurrence of Target
Given a target number and an integer array sorted in ascending order. Find the total number of occurrences of target in the array.

Example
Given [1, 3, 3, 4, 5] and target = 3, return 2.

Given [2, 2, 3, 4, 6] and target = 4, return 1.

Given [1, 2, 3, 4, 5] and target = 6, return 0.

Challenge
Time complexity in O(logn)

'''

class Solution:
    """
    @param A: A an integer array sorted in ascending order
    @param target: An integer
    @return: An integer
    """
    def totalOccurrence(self, A, target):
        # write your code here
        if not A or len(A) == 0:
            return 0

        start, end = 0, len(A) - 1
        while start + 1 < end:
            mid = (start + end) // 2
            if A[mid] < target:
                start = mid
            else:
                end = mid

        if A[start] == target:
            leftBound = start
        elif A[end] == target:
            leftBound = end
        else:
            return 0

        start, end = leftBound, len(A) - 1
        while start + 1 < end:
            mid = (start + end) // 2
            if A[mid] > target:
                end = mid
            else:
                start = mid
        if A[end] == target:
            rightBound = end
        else:
            rightBound = start
        return rightBound - leftBound + 1