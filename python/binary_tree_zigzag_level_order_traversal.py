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
    @return: A list of lists of integer include the zigzag level order traversal of its nodes' values.
    """
    def zigzagLevelOrder(self, root):
        res = []
        if not root:
            return res

        q = [root]
        level = 1
        current = []
        new = []

        while len(q) > 0:
            if level % 2 == 1:
                node = q.pop(0)
                current.append(node.val)
                if node.left:
                    new.append(node.left)
                if node.right:
                    new.append(node.right)
            else:
                node = q.pop()
                current.append(node.val)
                if node.right:
                    new.insert(0, node.right)
                if node.left:
                    new.insert(0, node.left)
            if len(q) == 0:
                res.append(current)
                q = new
                level += 1
                current = []
                new = []
        return res
