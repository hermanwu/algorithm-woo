/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result = [];

  recursion(root, targetSum, [], result);

  return result;
}

function recursion(
  node: TreeNode,
  targetSum: number,
  current: number[],
  result: number[][]
) {
  if (node === null) {
    return;
  }

  if (node.left === null && node.right === null && node.val === targetSum) {
    result.push([...current, node.val]);
    return;
  }

  current.push(node.val);

  recursion(node.left, targetSum - node.val, current, result);
  recursion(node.right, targetSum - node.val, current, result);

  current.pop();
}
