/**
 Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 Example 1:

 11110
 11010
 11000
 00000
 Answer: 1

 Example 2:

 11000
 11000
 00100
 00011
 Answer: 3

 */

public class NumberOfIslands {
    public int numIslands(char[][] grid) {
        int count = 0;
        int m = grid.length;
        if (m == 0) {
            return 0;
        }

        int n = grid[0].length;

        for (int i = 0; i < m ;i++) {
            for (int j = 0; j < n; j++) {

                if (grid[i][j] == '1') {
                    markNeighborsToVisited(grid, i, j);
                    count++;
                }
            }
        }
        return count;
    }

    private void markNeighborsToVisited(char[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {
            return;
        }

        grid[i][j] = '0';
        markNeighborsToVisited(grid, i + 1, j);
        markNeighborsToVisited(grid, i - 1, j);
        markNeighborsToVisited(grid, i, j + 1);
        markNeighborsToVisited(grid, i, j - 1);
    }
}
