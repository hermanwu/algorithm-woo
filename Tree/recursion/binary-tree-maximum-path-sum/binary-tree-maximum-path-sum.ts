/**
Binary Tree Maximum Path Sum.

https://leetcode.com/problems/binary-tree-maximum-path-sum/

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.


Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.


Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

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

/**
 * Methodology: Tree Recursion.
 * 1. Figure out what information needs to be stored globally.
 * 1. Design a recursive call that get enough information and
 *    return the result that can be used recursively
 *
 * 2. For simple purpose, an helper function could always be useful.
 * 3. In the recursive method, handle null condition and terminate condition.
 * 4. Divide:  handle three branches: Left child node, right child node, and middle node (order can definitely be changed).
 * 5  Gather necessary information with branch results.
 * 5. Conquer.
 */
function maxPathSum(root: TreeNode | null): number {
  // Figure out what information needs to be stored globally
  let max = Number.NEGATIVE_INFINITY;

  // Design a recursive call that get enough information and return the result that can be used recursively
  function helper(node: TreeNode): number {
    // In the recursive method, handle null condition and terminate condition.
    if (node === null) {
      return 0;
    }

    // Divide:  handle three branches: Left child node, right child node, and middle node (order can definitely be changed).
    const left = Math.max(0, helper(node.left));
    const right = Math.max(0, helper(node.right));

    // Gather necessary information with branch results.
    max = Math.max(max, left + right + node.val);

    // Conquer
    return Math.max(left, right) + node.val;
  }

  helper(root);

  return max;
}
