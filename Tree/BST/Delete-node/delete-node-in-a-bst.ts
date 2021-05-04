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

export function successor(root: TreeNode) {
  root = root.right;
  while (root.left != null) root = root.left;
  return root.val;
}

export function predecessor(root: TreeNode) {
  root = root.left;
  while (root.right != null) root = root.right;
  return root.val;
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  // Handle null.
  if (root === null) {
    return null;
  }

  // Handle left node
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }

  // Handle right node.
  else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    // Handle both null.
    // Terminate condition.
    if (root.left === null && root.right === null) {
      root = null;
    } else if (root.right != null) {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    } else {
      root.val = predecessor(root);
      root.right = deleteNode(root.left, root.val);
    }
  }

  return root;
}
