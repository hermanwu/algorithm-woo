/**
 * 510. Inorder Successor in BST II
 * https://leetcode.com/problems/inorder-successor-in-bst-ii/
 *
 * Given a node in a binary search tree, return the in-order
 * successor of that node in the BST.
 * If that node has no in-order successor, return null.
 *
 * The successor of a node is the node with the smallest key greater than node.val.
 *
 * You will have direct access to the node but not to the root of the tree.
 * Each node will have a reference to its parent node. Below is the definition for Node:
 */
export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  parent: Node | null;
  constructor(
    val?: number,
    left?: Node | null,
    right?: Node | null,
    parent?: Node | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.parent = parent === undefined ? null : parent;
  }
}

function inorderSuccessor(node: Node): Node | null {
  if (node.right) {
    let cur = node.right;
    while (cur.left != null) {
      cur = cur.left;
    }
    return cur;
  } else {
    while (node.parent && node.parent.right === node) {
      node = node.parent;
    }
  }

  return node.parent;
}
