export function edgesToAdjacentList(edges: [number, number][]) {
  const graph = new Map();

  for (let edge of edges) {
    if (graph.has(edge[0]) === false) {
      graph.set(edge[0], new Set<number>());
    }

    if (graph.has(edge[1]) === false) {
      graph.set(edge[1], new Set<number>());
    }

    graph.get(edge[0]).add(edge[1]);
    graph.get(edge[1]).add(edge[0]);
  }

  return graph;
}
