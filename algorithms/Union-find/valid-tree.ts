/**
 * You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n
 * and a list of edges where edges[i] = [ai, bi] indicates that there is an
 * undirected edge between nodes ai and bi in the graph.
 *
 * Return true if the edges of the given graph make up a valid tree, and false otherwise.
 *
 * Leetcode: https://leetcode.com/problems/graph-valid-tree/
 *
 * Example 1:
 * Input: n = 5, edges = [[0,2],[2,4]],
 * Output: true
 *
 * Example 2:
 * Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
 * Output: false
 *
 * // No circle in it.
 * // All nodes are visited / connected.
 */
class UnionFind {
  parent = {};
  size = {};
  count;

  constructor(n) {
    this.count = n;

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  find(x) {
    // x is a parent node.
    if (this.parent[x] === x) return x;
    parent[x] = this.find(parent[x]);
    return parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.size[rootX] > this.size[rootY]) {
      this.size[rootX] += this[rootY];
    } else {
      this.size[rootY] += this.size[rootX];
      parent[rootX] = rootY;
    }
    this.count -= 1;
    return true;
  }
}

function validTree(n: number, edges: number[][]): boolean {
  const uf = new UnionFind(n);
  for (let edge of edges) {
    if (!uf.union(edge[0], edge[1])) {
      return false;
    }
  }
  return uf.count === 1;
}
