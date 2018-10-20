'''
Description
Given the root and two nodes in a Binary Tree. Find the lowest common ancestor(LCA) of the two nodes.
The lowest common ancestor is the node with largest depth which is the ancestor of both nodes.
Return null if LCA does not exist.

node A or node B may not exist in tree.

Have you met this question in a real interview?
Example
For the following binary tree:

  4
 / \
3   7
   / \
  5   6
LCA(3, 5) = 4

LCA(5, 6) = 7

LCA(6, 7) = 7
'''

class Solution:
    """
    @param: root: The root of the binary tree.
    @param: A: A TreeNode
    @param: B: A TreeNode
    @return: Return the LCA of the two nodes.
    """

    found = False

    def lowestCommonAncestor3(self, root, A, B):
        if root is None:
            return None
        result = self.helper(root, A, B)

        if self.found:
            return result

    def helper(self, root, A, B):
        # write your code here
        if root is None:
            return None

        left = self.helper(root.left, A, B)
        if self.found is True:
            return left

        right = self.helper(root.right, A, B)
        if self.found is True:
            return right

        if left is not None and right is not None:
            self.found = True
            return root


        if root is A or root is B:
            if A == B:
                self.found = True
                return root

            if left is not None or right is not None:
                self.found = True
                return root

            if left is None and right is None:
                return root

        if right is A or right is B:
            return right

        if left is A or left is B:
            return left

        return None

