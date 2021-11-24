import { TreeNode } from "./tree-node.class";

export function successor(root: TreeNode) {
  root = root.right;
  while (root.left != null) root = root.left;
  return root.val;
}
