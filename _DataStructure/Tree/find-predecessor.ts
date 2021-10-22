import { TreeNode } from "./tree-node.class";

export function predecessor(root: TreeNode) {
  root = root.left;
  if (root.left === null) {
    return null;
  }
  while (root.right != null) root = root.right;
  return root.val;
}
