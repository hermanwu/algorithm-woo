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
