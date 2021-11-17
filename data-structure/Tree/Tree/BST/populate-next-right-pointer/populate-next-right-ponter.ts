export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: Node) {
  if (root === null) {
    return root;
  }

  dfs(root, null);

  return root;
}

function dfs(curr: Node, next: Node) {
  if (curr === null) {
    return;
  }

  curr.next = next;

  dfs(curr.left, curr.right);
  dfs(curr.right, next ? next.left : null);
}
