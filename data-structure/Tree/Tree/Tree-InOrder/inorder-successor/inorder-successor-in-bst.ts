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

export function inorderSuccessor(
  root: TreeNode | null,
  p: TreeNode | null
): TreeNode | null {
  if (root === null) {
    return null;
  }

  if (root.val < p.val) {
    return inorderSuccessor(root.right, p);
  } else {
    const left = inorderSuccessor(root.left, p);
    return left ? left : root;
  }
}
