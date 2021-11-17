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

function isCompleteTree(root: TreeNode | null): boolean {
  const queue = [root];
  let seen = false;

  while (queue.length > 0) {
    const cur = queue.shift();

    if (seen && cur !== null) {
      return false;
    }

    if (cur === null) {
      seen = true;
    }

    if (cur !== null) {
      queue.push(cur.left);
      queue.push(cur.right);
    }
  }

  return true;
}
