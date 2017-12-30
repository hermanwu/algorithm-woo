import java.util.Arrays;

/**

 Two elements of a binary search tree (BST) are swapped by mistake.

 Recover the tree without changing its structure.

 Note:
 A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

 */
public class RecoverBinarySearchTree {

    // think about morris traversal
    public static void main(String[] args) {
            TreeNode root = TreeGenerator.generateTreeWithArray(new int[]{3, 2, 5, 4, -1, 1});

            RecoverBinarySearchTree r = new RecoverBinarySearchTree();

            r.recoverTreeRecursive(root);

            TreePrinter.printTreeNode(root);
    }

    TreeNode first = null;
    TreeNode second = null;
    boolean firstTime = true;
    TreeNode prev = null;

    public void recoverTree(TreeNode root) {
        prev = new TreeNode(Integer.MIN_VALUE);
        first = null;
        second = null;

        TreeNode cur = root;

        // Uses in order morris traversal
        while (cur != null) {
            if (cur.left == null) {

                // Visit root value
                if (prev.val > cur.val && firstTime) {
                    first = prev;
                    firstTime =false;
                }
                if (prev.val > cur.val && !firstTime) {
                    second = cur;
                }
                prev = cur;

                cur = cur.right;

            } else {
                TreeNode temp = cur.left;

                while (temp.right != null && temp.right != cur) {
                    temp = temp.right;
                }

                if (temp.right == null) {
                    temp.right = cur;
                    cur = cur.left;
                } else {
                    temp.right = null;

                    // visit root.val;
                    if (prev.val > cur.val && firstTime) {
                        first = prev;
                        firstTime =false;
                    }

                    if (prev.val > cur.val && !firstTime) {
                        second = cur;
                    }
                    prev = cur;

                    cur = cur.right;
                }
            }
        }

        if (first != null && second != null) {
            int temp = first.val;
            first.val = second.val;
            second.val = temp;
        }
    }

    public void recoverTreeRecursive(TreeNode root) {
        first = null;
        second = null;
        prev = new TreeNode(Integer.MIN_VALUE);

        traverse(root);

        int temp = first.val;
        first.val = second.val;
        second.val = temp;
    }

    public void traverse(TreeNode root) {
        if (root == null) {
            return;
        }

        traverse(root.left);

        if (first == null && prev.val > root.val) {
            first = prev;
        }

        if (first != null && prev.val > root.val) {
            second = root;
        }

        prev = root;

        traverse(root.right);
    }
}
