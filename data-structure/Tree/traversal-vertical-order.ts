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
  return [[]];
}

// const root = new TreeNode(3);
// const left = new TreeNode(9);
// const right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

// root.left = left;
// root.right = right;

// console.log(verticalOrder(root)); // Expect [[9],[3,15],[20],[7]]
