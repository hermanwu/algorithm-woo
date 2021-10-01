// constraints [a, b] => b needs to be finished before a => b is one direction to a.
export function topologicalSort(
  constraints: [number, number][],
  numOfNodes: number
) {
  // Build constraint map.
  const constraintsCount = new Array(numOfNodes).fill(0);
  // Build adjacent list.
  const adjList = new Map();
  for (let i = 0; i < numOfNodes; i++) {
    adjList.set(i, new Set());
  }
  for (let [to, from] of constraints) {
    adjList.get(from).add(to);
    constraintsCount[to] += 1;
  }

  // create a queue with things that has no constraint.
  const queue = [];

  for (let i = 0; i < constraintsCount.length; i++) {
    if (constraintsCount[i] === 0) {
      queue.push(i);
    }
  }

  const result = [];
  // Keep iterate through node that has no constraints.
  while (queue.length > 0) {
    const cur = queue.shift();
    result.push(cur);

    const nextNodes = adjList.get(cur);

    for (let node of nextNodes) {
      constraintsCount[node] -= 1;

      if (constraintsCount[node] === 0) {
        queue.push(node);
      }
    }
  }

  return result.length === numOfNodes ? result : [];
}
