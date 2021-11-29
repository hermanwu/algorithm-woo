/**
 * Remember to add a special character to represent null value.
 * BFS needs a queue and a index to track traversal.
 */

/*
 * Encodes a tree to a single string.
 *
 */
function serialize(root: TreeNode | null): string {
  const q = [];
  const result = [];
  q.push(root);
  while (q.length) {
    const curr = q.shift();

    if (curr === null) {
      result.push("#");
    } else {
      result.push(curr.val);
      q.push(curr.left, curr.right);
    }
  }

  return result.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const arr = data.split(",");

  if (arr[0] === "#") {
    return null;
  }

  let i = 1;

  const root = new TreeNode(Number.parseInt(arr[0]));
  const q = [root];

  while (q.length > 0) {
    const curr = q.shift();

    if (arr[i] !== "#") {
      curr.left = new TreeNode(Number.parseInt(arr[i]));
      q.push(curr.left);
    }

    i += 1;

    if (arr[i] !== "#") {
      curr.right = new TreeNode(Number.parseInt(arr[i]));
      q.push(curr.right);
    }
    i += 1;
  }

  return root;
}
