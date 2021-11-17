"""
Description
Given a binary tree, return all root-to-leaf paths.

Have you met this question in a real interview?
Example
Given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

[
  "1->2->5",
  "1->3"
]


Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: the root of the binary tree
    @return: all root-to-leaf paths
    """
    def binaryTreePaths(self, root):
        # write your code here

        res = []
        path = []

        def walk(root):
            if root is None:
                return

            path.append(root.val)
            if root.left is None and root.right is None:
                res.append([str(x) for x in path])
                path.pop()
                return

            if root.left:
                walk(root.left)
            if root.right:
                walk(root.right)
            path.pop()

        walk(root)
        res = ['->'.join(x) for x in res]
        return res