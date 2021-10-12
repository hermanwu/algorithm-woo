/**
Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”



Constraints:
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.
 */

import { TreeNode } from "../../Tree/TreeNode/tree-node";

// Definition for a binary tree node.

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null || right !== null) {
    return root;
  }

  return left !== null ? left : right;
}

/** 
  const nodeP = new TreeNode(5, new TreeNode(6), new TreeNode(2));
  const nodeQ = new TreeNode(1, new TreeNode(0), new TreeNode(8));
  const root = new TreeNode(3, nodeP, nodeQ);
  console.log(tree, nodeP, nodeQ) // expect to be root
  */
