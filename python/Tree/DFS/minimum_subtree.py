"""
Description
Given a binary tree, find the subtree with minimum sum. Return the root of the subtree.

LintCode will print the subtree which root is your return node.
It's guaranteed that there is only one subtree with minimum sum and the given binary tree is not an empty tree.

Have you met this question in a real interview?
Example
Given a binary tree:

     1
   /   \
 -5     2
 / \   /  \
0   2 -4  -5
return the node 1.


Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: the root of binary tree
    @return: the root of the minimum subtree
    """
    resultNode = None
    minValue = float("inf")

    def findSubtree(self, root):
        # write your code here
        self.helper(root)
        return self.resultNode

    def helper(self, root):
        if root is None:
            return 0

        total = self.helper(root.left) + root.val + self.helper(root.right)

        if total < self.minValue:
            self.minValue = total
            self.resultNode = root

        return total