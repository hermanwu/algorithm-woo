import { TreeNode } from "../../_DataStructure/Tree/tree-node.class";

export function bfs(node: TreeNode, target: number): boolean {
  const queue = [];
  queue.push(node);

  while (queue.length > 0) {
    const cur = queue.shift();

    if (cur.val === target) {
      return true;
    }

    if (cur.left) {
      cur.push(cur.left);
    }

    if (cur.right) {
      cur.push(cur.right);
    }
  }

  return false;
}
