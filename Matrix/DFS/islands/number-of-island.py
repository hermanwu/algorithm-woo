class Solution:
  def numIslands(self, grid):
    if not grid:
      return 0

    m, n = len(grid), len(grid[0])

    visited = set()
    numberOfIsland = 0
    dirs = [
      (0, 1),
      (0, -1),
      (1, 0),
      (-1, 0)
    ]

    for i in range(m):
      for j in range(n):
        if self.check(grid, i, j, visited):
          self.dfs(grid, i, j, visited, dirs)
          numberOfIsland += 1
    return numberOfIsland

    
  def dfs(self, grid, x, y, visited, dirs):
    visited.add((x, y))
    for dx, dy in dirs:
      nx = x + dx
      ny = y + dy
      if self.check(grid, nx, ny, visited):
        self.dfs(grid, nx, ny, visited, dirs)

  def check(self, grid, x, y, visited):
    m, n = len(grid), len(grid[0])
    if x >= 0 and x < m and y >= 0 and y < n and grid[x][y] and (x, y) not in visited:
      return True
    
    return False