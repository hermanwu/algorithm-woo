import { AdjacentLists } from "../classes/adjacentList.interface";

export function findConnectedComponents(
  verticesCount: number,
  adjacentLists: AdjacentLists
): number {
  let countOfConnectedComponent = 0;
  const visited = new Set<number>();

  for (let i = 0; i < verticesCount; i++) {
    if (visited.has(i) === false) {
      countOfConnectedComponent += 1;
      dfs(i, visited, adjacentLists);
    }
  }

  return countOfConnectedComponent;
}

function dfs(
  vertex: number,
  visited: Set<number>,
  adjacentLists: AdjacentLists
) {
  visited.add(vertex);
  for (let to of adjacentLists.get(vertex)) {
    if (visited.has(to) === false) {
      dfs(to, visited, adjacentLists);
    }
  }
}
