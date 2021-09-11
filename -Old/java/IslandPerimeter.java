/*

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16

* */

public class IslandPerimeter {
    public static void main(String[] args) {

        IslandPerimeter i = new IslandPerimeter();

        int[][] grid = new int[][]{
                {0, 1, 0, 0},
                {1, 1, 1, 0},
                {0, 1, 0, 0},
                {1, 1, 0, 0}
        };

        Printer.printResultComparsion(i.islandPerimeter(grid), 16);
    }

    public int islandPerimeter(int[][] grid) {
        int i, j;
        int n = grid.length;
        int m = grid[0].length;

        int count = 0;
        int connected = 0;

        for (i = 0; i < n; i++) {
            for (j = 0; j < m; j++) {
                if (grid[i][j] == 1) {
                    count++;

                    if (i > 0 && grid[i - 1][j] == 1) {
                        connected++;
                    }

                    if (j > 0 && grid[i][j - 1] == 1) {
                        connected++;
                    }
                }
            }
        }

        return count * 4 - connected * 2;
    }
}
