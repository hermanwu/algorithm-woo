class NumMatrix(object):

    def __init__(self, matrix):
        """
        :type matrix: List[List[int]]
        """
        self.m = len(matrix)
        self.n = len(matrix[0])
        self.presum = [[0 for _ in range(self.n)] for _ in range(self.m + 1)]
        self.matrix = matrix
        
        for i in range(1, self.m + 1):
            for j in range(self.n):
                self.presum[i][j] = self.presum[i - 1][j] + self.matrix[i - 1][j]

        

    def update(self, row, col, val):
        """
        :type row: int
        :type col: int
        :type val: int
        :rtype: void
        """

        diff = val - self.matrix[row][col]
        self.matrix[row][col] = val
        for i in range(row + 1, self.m + 1):
            self.presum[i][col] += diff
        

    def sumRegion(self, row1, col1, row2, col2):
        """
        :type row1: int
        :type col1: int
        :type row2: int
        :type col2: int
        :rtype: int
        """
        ans = 0
        for j in range(col1, col2 + 1):

            ans += (self.presum[row2 + 1][j] - self.presum[row1][j])
        return ans

# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# obj.update(row,col,val)
# param_2 = obj.sumRegion(row1,col1,row2,col2)