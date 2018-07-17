class Solution:
    """
    @param grid: a boolean 2D matrix
    @return: an integer
    """
    def numIslands(self, grid):
        # write your code here
        self.grid = grid
        m = len(grid)
        if m == 0:
            return 0
        n = len(grid[0])
        self.visit = [[False for i in range(n)] for j in range(m)]

        count = 0

        for row in range(m):
            for col in range(n):
                if self.check(row, col):
                    self.visit[row][col] = True
                    self.bfs(row, col)
                    count += 1
        return count

    def check(self, x, y):
        if x >= 0 and x < len(self.grid) and y >= 0 and y < len(self.grid[0]) and self.grid[x][y] and self.visit[x][y] == False:
            return True

    def bfs(self, x, y):
        direction = [[1,0],[0,1],[-1, 0],[0,-1]]
        q = [(x, y)]

        while len(q) > 0:
            x = q[0][0]
            y = q[0][1]
            q.pop(0)
            for k in range(4):
                newx = x + direction[k][0]
                newy = y + direction[k][1]
                if self.check(newx, newy):
                    self.visit[newx][newy] = True
                    q.append((newx, newy))