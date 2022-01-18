/**
314. Binary Tree Vertical Order Traversal

Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

See link for graph example to understand better: https://leetcode.com/problems/binary-tree-vertical-order-traversal/

*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function verticalOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const map = new Map();
  let min = 0;
  let max = 0;

  let queue = [];
  let newQueue = [];

  queue.push([root, 0]);

  while (queue.length > 0) {
    for (let item of queue) {
      const node = item[0];
      const col = item[1];

      if (map.has(col) === false) {
        map.set(col, []);
      }

      map.get(col).push(node.val);

      min = Math.min(min, col);
      max = Math.max(max, col);

      if (node.left) {
        newQueue.push([node.left, col - 1]);
      }

      if (node.right) {
        newQueue.push([node.right, col + 1]);
      }
    }

    queue = newQueue;
    newQueue = [];
  }

  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(map.get(i));
  }
  return result;
}
