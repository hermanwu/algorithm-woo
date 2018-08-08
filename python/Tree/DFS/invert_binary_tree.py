"""

175. Invert Binary Tree
Invert a binary tree.

Example
  1         1
 / \       / \
2   3  => 3   2
   /       \
  4         4
Challenge
Do it in recursion is acceptable, can you do it without recursion?

Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""



class Solution:
    """
    @param root: a TreeNode, the root of the binary tree
    @return: nothing
    """
    def invertBinaryTree(self, root):
        # write your code here
        if root is None:
            return
        self.helper(root)


    def helper(self, root):
        if root is None:
            return

        self.helper(root.left)
        self.helper(root.right)

        root.left, root.right = root.right, root.left
        return