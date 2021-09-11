'''
Description
Given a target number, a non-negative integer k and an integer array A sorted in ascending order,
find the k closest numbers to target in A, sorted in ascending order by the difference between the number and target.
Otherwise, sorted in ascending order by number if the difference is same.

The value k is a non-negative integer and will always be smaller than the length of the sorted array.
Length of the given array is positive and will not exceed 10^4
Absolute value of elements in the array and x will not exceed 10^4
Have you met this question in a real interview?
Example
Given A = [1, 2, 3], target = 2 and k = 3, return [2, 1, 3].

Given A = [1, 4, 6, 8], target = 3 and k = 3, return [4, 1, 6].

Challenge
O(logn + k) time complexity.
'''

class Solution:
    """
    @param A: an integer array
    @param target: An integer
    @param k: An integer
    @return: an integer array
    """
    def kClosestNumbers(self, A, target, k):
        # write your code here
        if not A or k == 0 or len(A) < k:
            return []

        start, end = 0, len(A) - 1
        res = []
        while start + 1 < end:
            mid = start + (end - start) // 2
            if A[mid] == target:
                start = mid
                end = mid
                break
            elif A[mid] > target:
                end = mid
            else:
                start = mid

        count = k
        while start >= 0 and end < len(A) and count > 0:
            if start == end:
                res.append(A[start])
                start -= 1
                end += 1
            else:
                if abs(A[start] - target) > abs(A[end] - target):
                    res.append(A[end])
                    end += 1
                else:
                    res.append(A[start])
                    start -= 1
            count -= 1

        while count > 0 and start >= 0:
            res.append(A[start])
            start -= 1
            count -= 1

        while count > 0 and end < len(A):
            res.append(A[end])
            end += 1
            count -= 1

        return res