'''

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

'''
"""
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
        stack = []
        stack.append(root)

        while stack:
            cur = stack.pop()
            cur.left, cur.right = cur.right, cur.left

            if cur.left:
                stack.append(cur.left)
            if cur.right:
                stack.append(cur.right)