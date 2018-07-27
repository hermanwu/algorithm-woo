'''

28. Search a 2D Matrix
Write an efficient algorithm that searches for a value in an m x n matrix.

This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example
Consider the following matrix:

[
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
Given target = 3, return true.

'''

class Solution:
    """
    @param matrix: matrix, a list of lists of integers
    @param target: An integer
    @return: a boolean, indicate whether matrix contains target
    """
    def searchMatrix(self, matrix, target):
        # write your code here
        if not matrix or not matrix[0]:
            return False
        row, col = 0, len(matrix[0]) - 1

        while row < len(matrix) and col >= 0:
            if matrix[row][col] == target:
                return True
            if matrix[row][col] < target:
                row += 1
            else:
                col -= 1
        return False