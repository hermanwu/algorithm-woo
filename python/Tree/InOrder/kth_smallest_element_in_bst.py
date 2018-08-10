# https://www.lintcode.com/problem/kth-smallest-element-in-a-bst

class Solution:
    """
    @param root: the given BST
    @param k: the given k
    @return: the kth smallest element in BST
    """
    def kthSmallest(self, root, k):

        treelist = self.inOrder(root)

        if k <= 0:
            return None
        # return
        return self.treelist[k-1]

    # Method to do in order traversal
    def inOrder(self, root):
        result = []
        stack = []

        if root is None:
            return result

        # always setup cur
        cur = root
        while cur is not None or stack:
            while cur is not None:
                stack.append(cur)
                cur = cur.left

            cur = stack.pop()
            result.append(cur.val)
            cur = cur.right

        return result