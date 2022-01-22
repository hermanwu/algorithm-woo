/**
https://leetcode.com/problems/find-leaves-of-binary-tree/
 366. Find Leaves of Binary Tree
 */

function findLeaves(root: TreeNode | null): number[][] {
  const results = [];
  dfs(root);
  return results;

  function dfs(node: TreeNode): number {
    if (node === null) {
      return -1;
    }

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);
    const height = Math.max(leftHeight, rightHeight) + 1;

    if (results.length === height) {
      results.push([]);
    }

    results[height].push(node.val);
    node.left = null;
    node.right = null;
    return height;
  }
}
