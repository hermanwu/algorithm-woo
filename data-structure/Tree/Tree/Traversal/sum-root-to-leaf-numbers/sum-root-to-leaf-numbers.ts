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

function sumNumbers(root: TreeNode | null): number {
  return sum(root, 0);
}

function sum(node: TreeNode, current: number) {
  if (node === null) {
    return 0;
  }

  if (node.left === null && node.right === null) {
    return current * 10 + node.val;
  }

  let total = 0;

  if (node.left !== null) {
    total = total + sum(node.left, current * 10 + node.val);
  }

  if (node.right !== null) {
    total = total + sum(node.right, current * 10 + node.val);
  }

  return total;
}

// tricky about left node and right node list; reference doesn't change.
// Trick to handle left and right is null situation first.
//
