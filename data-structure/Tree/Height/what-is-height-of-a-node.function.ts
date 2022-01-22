/**

The height of a node is the number of edges on the longest path from the node to a leaf.
A leaf node will have a height of 0.

 */

import { TreeNode } from "../tree-node.class";

export const heightOfTree = (node: TreeNode) => {
  if (node === null) {
    return -1;
  }
  return 1 + Math.max(heightOfTree(node.left), heightOfTree(node.right));
};
