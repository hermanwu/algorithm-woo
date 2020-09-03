/**
 * @param root: a TreeNode, the root of the binary tree
 * @return:
 */
const invertBinaryTree = function (root) {
  // write your code here

  if (root === null) {
    return null;
  }

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertBinaryTree(root.left);
  invertBinaryTree(root.right);
};
