/**
 * A tree is an undirected graph in which any two vertices are connected by exactly one path.
 * In other words, any connected graph without simple cycles is a tree.
 *
 * Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where
 * edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes
 * ai and bi in the tree, you can choose any node of the tree as the root. When you select
 * a node x as the root, the result tree has height h. Among all possible rooted trees,
 * those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).
 *
 * Return a list of all MHTs' root labels. You can return the answer in any order.
 *
 * The height of a rooted tree is the number of edges on the longest downward path between
 * the root and a leaf.
 *
 * Constraints:
 * - 1 <= n <= 2 * 104
 * - edges.length == n - 1
 * - 0 <= ai, bi < n
 * - ai != bi
 * - All the pairs (ai, bi) are distinct.
 * - The given input is guaranteed to be a tree and there will be no repeated edges.
 *
 * Leetcode: https://leetcode.com/problems/minimum-height-trees/
 */
function findMinHeightTrees(n: number, edges: number[][]): number[] {
  // convert this to a adjacent list.
  const map = new Map<number, Set<number>>();

  for (let i = 0; i < n; i++) {
    map.set(i, new Set());
  }

  for (let edge of edges) {
    map.get(edge[1]).add(edge[0]);
    map.get(edge[0]).add(edge[1]);
  }

  // repeat until there is less or equal than two nodes (Single and Double);
  while (map.size > 2) {
    // find all leafs.
    const leafs = [];
    for (let key of map.keys()) {
      const hashSet = map.get(key);
      // leaf node should only has one edge.
      if (hashSet.size === 1) {
        leafs.push(key);
      }
    }

    // Remove leaf from the map set.
    // delete the leaf from parents' adj list.
    for (let leaf of leafs) {
      const parent = Array.from(map.get(leaf).values())[0];
      map.delete(leaf);
      map.get(parent).delete(leaf);
    }
  }

  return Array.from(map.keys());
}

//console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])) // [3,4]
//console.log(findMinHeightTrees(1, [])); // [0]
//console.log(findMinHeightTrees(2, [[0, 1]])); // [0, 1]
//console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]])); // [1]
