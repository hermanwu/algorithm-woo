/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const result = [];

  helper(root, result);

  return result.toString();
}

function helper(node: TreeNode | null, result: number[]) {
  if (node === null) {
    result.push(null);
    return;
  }

  result.push(node.val);
  helper(node.left, result);
  helper(node.right, result);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const arr = JSON.parse(data);

  const result = helper2(arr);

  return result;
}

function helper2(arr: number[]): TreeNode | null {
  const current = arr[0];

  const result = new TreeNode(current);

  if (result) {
    arr.shift();
    result.left = helper2(arr);
    result.right = helper2(arr);
  }

  return result;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
