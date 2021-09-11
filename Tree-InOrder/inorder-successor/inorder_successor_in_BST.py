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


def inorderSuccessor(self, root, p):
    if root is None or p is None:
        return None

    successor = None

    while root is not None and root != p:
        if root.val > p.val:
            successor = root
            root = root.left
        else:
            root = root.right

    if root is None:
        return

    if root.right is None:
        return successor

    root = root.right
    while root.left is not None:
        root = root.left

    return root
