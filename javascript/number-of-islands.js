/*

 Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 You may assume all four edges of the grid are all surrounded by water.

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

let m;
let n;

let numIslands = (grid) => {
    if (grid === null || grid.length === 0) {
        return 0;
    }

    let count = 0;
    m = grid.length;
    n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                dfsMarking(grid, i, j);
                count++;
            }
        }
    }

    return count;
};

let dfsMarking = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== '1') {
        return;
    }

    grid[i][j] = '0';
    dfsMarking(grid, i+1, j);
    dfsMarking(grid, i-1, j);
    dfsMarking(grid, i, j+1);
    dfsMarking(grid, i, j-1);
}