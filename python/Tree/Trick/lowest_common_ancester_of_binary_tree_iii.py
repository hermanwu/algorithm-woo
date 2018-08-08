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
    def lowestCommonAncestor3(self, root, A, B):
        self.A = A
        self.B = B
        self.result = None
        self.find(root)
        return self.result

    def find(self, node):
        if node is None:
            return 0
        result = self.find(node.left) + self.find(node.right)
        if self.result is None:
            if node == self.A:
                result += 1
            if node == self.B:
                result += 2
            if result == 3:
                self.result = node
        return result
