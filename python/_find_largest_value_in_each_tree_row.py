# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def largestValues(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        maxes = []
        row = [root]
        while any(row):
            maxes.append(max(node.val for node in row))

            tmp = []

            for node in row:
                if node.left:
                    tmp.append(node.left)
                if node.right:
                    tmp.append(node.right)

            row = tmp

        return maxes