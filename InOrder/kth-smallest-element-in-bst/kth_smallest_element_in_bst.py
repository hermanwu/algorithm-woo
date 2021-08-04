# https://www.lintcode.com/problem/kth-smallest-element-in-a-bst

class Solution:
    """
    @param root: the given BST
    @param k: the given k
    @return: the kth smallest element in BST
    """
    def kthSmallest(self, root, k):
        # write your code here
        arr = self.inorder(root)

        return arr[k - 1]

        
    def inorder(self, root):
        result = []
        stack = []
        
        tmp = root
        while tmp or stack:
            while tmp:
                stack.append(tmp)
                tmp = tmp.left
                
            tmp = stack.pop()
            result.append(tmp.val)
            tmp = tmp.right
        return result