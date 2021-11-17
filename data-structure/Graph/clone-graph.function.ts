import { Node } from "./classes/node.class";

/**
 *
 *
 * https://leetcode.com/problems/clone-graph/
 *
 *
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

// DFS clone graph
export function cloneGraph(node: Node | null): Node | null {
  const nodeSet = new Set<Node>();

  return dfsGraph(node, nodeSet);
}

export function dfsGraph(node: Node, nodeSet: Set<Node>) {
  if (node === null) {
    return null;
  }

  if (nodeSet.has(node)) {
    return node;
  }

  const newNode = new Node(node.val);
  for (let k of node.neighbors) {
    newNode.neighbors.push(dfsGraph(k, nodeSet));
  }

  return newNode;
}
