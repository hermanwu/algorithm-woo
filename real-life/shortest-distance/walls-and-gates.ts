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
  const m = rooms.length;
  const n = rooms[0].length;
  let queue: Array<[number, number]> = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  // BFS
  while (queue.length > 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const current = queue[0];

      search(current, rooms, queue, m, n);

      queue = queue.slice(1);
    }
  }
}

export function search(
  current: [number, number],
  rooms,
  queue,
  m: number,
  n: number
): void {
  const neighbors = [
    [current[0] + 1, current[1]],
    [current[0] - 1, current[1]],
    [current[0], current[1] + 1],
    [current[0], current[1] - 1],
  ];

  for (let neighbor of neighbors) {
    if (
      neighbor[0] < 0 ||
      neighbor[0] >= m ||
      neighbor[1] < 0 ||
      neighbor[1] >= n
    ) {
      continue;
    }

    if (
      rooms[neighbor[0]][neighbor[1]] === -1 ||
      rooms[neighbor[0]][neighbor[1]] === 0
    ) {
      continue;
    }

    if (rooms[neighbor[0]][neighbor[1]] === 2147483647) {
      rooms[neighbor[0]][neighbor[1]] = rooms[current[0]][current[1]] + 1;
      queue.push(neighbor);
    }
  }
}
