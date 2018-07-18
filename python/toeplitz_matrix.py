class Solution:
    """
    @param matrix: the given matrix
    @return: True if and only if the matrix is Toeplitz
    """
    def isToeplitzMatrix(self, matrix):
        # Write your code here
        if not matrix or len(matrix) == 0 or not matrix[0] or len(matrix[0]) == 0:
            return False
        row, col = len(matrix), len(matrix[0])
        for i in range(row - 1):
            for j in range(col - 1):
                if matrix[i][j] != matrix[i + 1][j + 1]:
                    return False
        return True