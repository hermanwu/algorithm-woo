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
        results = []

        # write your code here
        if not root:
            return results

        self.helper(root, str(root.val), results)
        return results

    def helper(self, root, curPath, results):
        # should recusion handle child nodes
        if root.left is None and root.right is None:
            results.append(curPath)
            return

        if root.left:
            self.helper(root.left, curPath + '->' + str(root.left.val), results)

        if root.right:
            self.helper(root.right, curPath + '->' + str(root.right.val), results)