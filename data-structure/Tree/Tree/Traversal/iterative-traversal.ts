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

export function inOrder(root: TreeNode) {
  const result = [];
  const stack = [];

  let cur = root;

  while (stack.length > 0 || cur !== null) {
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      const temp = stack.pop();
      result.push(temp.val);
      cur = temp.right;
    }
  }

  return result;
}

export function postOrder(root: TreeNode) {
  const result = [];
  const stack = [];

  let cur = root;

  while (stack.length > 0 || cur !== null) {
    if (cur !== null) {
      stack.push(cur);
      result.unshift(cur.val);
      cur = cur.right;
    } else {
      const temp = stack.pop();
      cur = cur.left;
    }
  }

  return result;
}
