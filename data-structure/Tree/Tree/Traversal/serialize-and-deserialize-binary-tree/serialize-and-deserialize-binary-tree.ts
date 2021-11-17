/**
 * LeetCode definition for a binary tree node
 */
export class TreeNode<T> {
  val: T;
  left: TreeNode<T>;
  right: TreeNode<T>;

  /**
   * Create a binary tree node
   *
   * @param value Value of the node
   * @param leftNode TreeNode to the left of the node
   * @param rightNode TreeNode to the right of the node
   */
  constructor(value: T, leftNode?: TreeNode<T>, rightNode?: TreeNode<T>) {
    this.val = value;
    this.left = leftNode === undefined ? null : leftNode;
    this.right = rightNode === undefined ? null : rightNode;
  }
}

/**
 * Design an algorithm to serialize and deserialize a binary tree.
 * The serialization format should be JSON so we are able to send the tree back and forth
 * between our app and the server.
 */

function serialize(root: TreeNode<number> | null): string {
  if (!root) {
    return "";
  }
  // convert tree to json object
  const result = traverse(root);
  console.log(result);
  return JSON.stringify(result);
}

function traverse(root: TreeNode<number>) {
  const result = {
    value: root.val,
    left: null,
    right: null,
  };

  if (root.left !== null) {
    result.left = traverse(root.left);
  }

  if (root.right !== null) {
    result.right = traverse(root.right);
  }

  return result;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode<number> | null {
  if (data === "") {
    return null;
  }

  const jsonObject = JSON.parse(data);

  const result = new TreeNode(null);
  convertToTreeNode(result, jsonObject);

  return result;
}

function convertToTreeNode(root: TreeNode<number>, nodeInObject: any) {
  root.val = nodeInObject.value;

  if (nodeInObject.left) {
    root.left = new TreeNode(null);
    convertToTreeNode(root.left, nodeInObject.left);
  }

  if (nodeInObject.right) {
    root.right = new TreeNode(null);
    convertToTreeNode(root.right, nodeInObject.right);
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
const testTreeNode = new TreeNode(1);
testTreeNode.right = new TreeNode(3);

testTreeNode.right.right = new TreeNode(5);

console.log(testTreeNode);
console.log(serialize(testTreeNode));
console.log(deserialize(serialize(testTreeNode)));
