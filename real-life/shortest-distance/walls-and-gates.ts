/**
 * You are given an m x n grid rooms initialized with these three possible values:
 *
 *     (-1): A wall or an obstacle.
 *     (0): A gate.
 *     (INF): Infinity means an empty room.
 *       - We use the value 231 - 1 = 2147483647 to represent INF as you may assume
 *         that the distance to a gate is less than 2147483647.
 *
 * Fill each empty room with the distance to its nearest gate. If it is impossible
 * to reach a gate, it should be filled with INF.
 *
 * Do not return anything, modify rooms in-place instead.
 *
 * Leetcode w/ diagram: https://leetcode.com/problems/walls-and-gates/
 */
/**
 Do not return anything, modify rooms in-place instead.
 */
export function wallsAndGates(rooms: number[][]): void {
  const directions = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ];
  let m = rooms.length;
  let n = rooms[0].length;
  let queue = [];
  let nextQueue = [];
  let roomCount = 0;
  let steps = 1;
  const inf = 2147483647;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }

      if (rooms[i][j] === inf) {
        roomCount += 1;
      }
    }
  }

  while (queue.length > 0) {
    for (let pos of queue) {
      for (let dir of directions) {
        const newX = pos[0] + dir[0];
        const newY = pos[1] + dir[1];

        if (
          newX >= 0 &&
          newX < m &&
          newY >= 0 &&
          newY < n &&
          rooms[newX][newY] === inf
        ) {
          rooms[newX][newY] = steps;
          nextQueue.push([newX, newY]);
          roomCount -= 1;

          if (roomCount === 0) {
            return;
          }
        }
      }
    }

    steps += 1;
    queue = nextQueue;
    nextQueue = [];
  }
}
