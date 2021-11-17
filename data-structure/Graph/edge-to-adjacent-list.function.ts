export function edgesToAdjacentListUndirected(
  vertices: number,
  edges: [number, number][]
) {
  const graph = new Map();
  for (let i = 0; i < vertices; i++) {
    graph.set(i, new Set());
  }

  for (let edge of edges) {
    graph.get(edge[0]).add(edge[1]);
    graph.get(edge[1]).add(edge[0]);
  }

  return graph;
}
