import { TreeNode } from "./tree-node.class";

export function successor(root: TreeNode) {
  root = root.right;
  if (root === null) {
    return root;
  }
  while (root.left != null) root = root.left;

  return root.val;
}
