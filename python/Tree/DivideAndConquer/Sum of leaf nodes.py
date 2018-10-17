class Solution:
    """
    @param root: 
    @return: the sum of leafnode
    """
    def sumLeafNode(self, root):
        # Write your code here
        result = self.search(root)
        return result
        
    def search(self, root):
        if root is None:
            return 0
        if root.left is None and root.right is None:
            return root.val
            
        return self.search(root.left) + self.search(root.right)