/**
 * @param root: a TreeNode, the root of the binary tree
 * @return:
 */
const invertBinaryTree = function (root) {
  // write your code here
  // Terminate condition.
  if (root === null) {
    return null;
  }

  // Divide and conquer: left, middle, right. (make sure all have terminate condition);
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertBinaryTree(root.left);
  invertBinaryTree(root.right);
};
