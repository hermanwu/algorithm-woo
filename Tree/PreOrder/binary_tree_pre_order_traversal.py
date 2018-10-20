"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: A Tree
    @return: Preorder in ArrayList which contains node values.
    """
    def preorderTraversal(self, root):
        # write your code here
        result = []
        stack = []
        stack.append(root)

        while stack:
            cur = stack.pop()

            result.append(cur.val)

            if cur.right is not None:
                stack.append(cur.right)

            if cur.left is not None:
                stack.append(cur.left)

        return result