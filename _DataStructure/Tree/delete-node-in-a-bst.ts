/**
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST.
 * Return the root node reference (possibly updated) of the BST.
 *
 * Basically, the deletion can be divided into two stages:
 * 1. Search for a node to remove.
 * 2. If the node is found, delete the node.
 *
 * Follow up: Can you solve it with time complexity O(height of tree)?
 */

import { predecessor } from "./find-predecessor";
import { successor } from "./find-successor";

export class TreeNode {
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
 * 1. Design a recursive call that pass in enough information (Whether those information is good to store globally).
 * 2. For simple purpose, you don't need to use method itself.
 * 3. In the recursive method, handle null condition and terminate condition.
 * 4. Divide and conquer:  handle three branches: Left child node, right child node, and middle node (order can definitely be changed).
 * 5. Each branch should have terminate condition and move to next level.
 * @param root
 * @param key
 * @returns
 */
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  //  Design a recursive call that pass in enough information (Whether those information is good to store globally).
  return helper(root, key);
}

function helper(root: TreeNode | null, key: number): TreeNode | null {
  // In the recursive method, handle null condition and terminate condition.
  if (root === null) {
    return null;
  }

  // Divide and conquer:  handle three branches: Left child node, right child node, and middle node (order can definitely be changed).
  // Handle left node
  if (key > root.val) {
    root.right = helper(root.right, key);
  }

  // Handle right node.
  else if (key < root.val) {
    root.left = helper(root.left, key);
  } else {
    // Handle both null.
    // Terminate condition.
    if (root.left === null && root.right === null) {
      root = null;
    } else if (root.right != null) {
      root.val = successor(root);
      root.right = helper(root.right, root.val);
    } else {
      root.val = predecessor(root);
      root.right = helper(root.left, root.val);
    }
  }

  return root;
}
