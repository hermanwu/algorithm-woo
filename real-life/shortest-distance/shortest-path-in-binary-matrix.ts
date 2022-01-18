/**
 * Given an n x n binary matrix grid, return the length of the shortest clear
 * path in the matrix. If there is no clear path, return -1.
 *
 * A clear path in a binary matrix is a path from the top-left cell
 * (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
 *  - All the visited cells of the path are 0.
 *  - All the adjacent cells of the path are 8-directionally connected
 *      (i.e., they are different and they share an edge or a corner).
 *
 * The length of a clear path is the number of visited cells of this path.
 *
 * @param grid Binary matrix
 *
 * @returns Length of the shortest clear path
 */
function shortestPathBinaryMatrix(grid: number[][]): number {
  const directions = [
    [1, 1],
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ];

  // Build visited matrix;
  const len = grid.length;
  const visited = new Array(len).fill(null);
  for (let i = 0; i < len; i++) {
    visited[i] = new Array(len).fill(false);
  }

  if (grid[0][0] === 1) {
    return -1;
  }

  let queue = [];
  queue.push([0, 0]);
  let nextQueue = [];
  visited[0][0] = true;
  let distance = 1;

  while (queue.length > 0) {
    for (let item of queue) {
      const row = item[0];
      const col = item[1];

      if (row === len - 1 && col === len - 1) {
        return distance;
      }
      for (let direction of directions) {
        const newRow = row + direction[0];
        const newCol = col + direction[1];

        if (
          newRow < 0 ||
          newRow >= len ||
          newCol < 0 ||
          newCol >= len ||
          grid[newRow][newCol] === 1
        ) {
          continue;
        }

        if (visited[newRow][newCol]) {
          continue;
        }

        visited[newRow][newCol] = true;
        nextQueue.push([newRow, newCol]);
      }
    }

    distance += 1;
    queue = nextQueue;
    nextQueue = [];
  }

  return -1;
}
