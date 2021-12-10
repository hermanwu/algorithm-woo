/**
 * Leetcode: https://leetcode.com/problems/distribute-coins-in-binary-tree/
 *
 * You are given the root of a binary tree with n nodes where each node in
 * the tree has node.val coins. There are n coins in total throughout the
 * whole tree.
 *
 * In one move, we may choose two adjacent nodes and move one coin from one
 * node to another. A move may be from parent to child, or from child to
 * parent.
 *
 * Return the minimum number of moves required to make every node have
 * exactly one coin.
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

function distributeCoins(root: TreeNode | null): number {
  let ans = 0;
  dfs(root);
  return ans;

  function dfs(root: TreeNode): number {
    if (root === null) {
      return 0;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);

    const currentExtra = root.val - 1;
    ans += Math.abs(left) + Math.abs(right);
    return left + right + currentExtra;
  }
}

// const root = new TreeNode(3);
// root.left = new TreeNode(0);
// root.right = new TreeNode(0);
// console.log(distributeCoins(root))

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(0);
root.left.right = new TreeNode(3);
console.log(distributeCoins(root));
