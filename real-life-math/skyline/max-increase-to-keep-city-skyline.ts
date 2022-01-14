// https://leetcode.com/problems/max-increase-to-keep-city-skyline/
/*
There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism. You are given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c.

A city's skyline is the the outer contour formed by all the building when viewing the side of the city from a distance. The skyline from each cardinal direction north, east, south, and west may be different.

We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building). The height of a 0-height building can also be increased. However, increasing the height of a building should not affect the city's skyline from any cardinal direction.

Return the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction.
 */

function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const r = grid.length;
  const c = grid[0].length;
  const rowMax = new Array(r).fill(Number.MIN_SAFE_INTEGER);
  const colMax = new Array(c).fill(Number.MIN_SAFE_INTEGER);

  //  Calculate row and col max.
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      rowMax[i] = Math.max(rowMax[i], grid[i][j]);
      colMax[j] = Math.max(colMax[j], grid[i][j]);
    }
  }

  // Calculate maximum increase for each cell.
  let result = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      result += Math.min(rowMax[i], colMax[j]) - grid[i][j];
    }
  }

  return result;
}
