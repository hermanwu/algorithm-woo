def inorderSuccessor(self, root, p):
  if root is None or p is None:
    return None

  if root.val <= p.val:
    return self.inorderSuccessor(root.right, p)
  else:
    left = self.inorderSuccessor(root.left, p)
    if left is None:
      return root
    else:
      return left