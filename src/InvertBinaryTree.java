import java.util.LinkedList;
import java.util.Queue;

/**

 Invert a binary tree.
 4
 /   \
 2     7
 / \   / \
 1   3 6   9
 to
 4
 /   \
 7     2
 / \   / \
 9   6 3   1

 */
public class InvertBinaryTree {
    public TreeNode invertTree(TreeNode root) {
        // terminate condition for recursion
        if (root == null) { return null; }

        // revert left and right nodes;
        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        // recursive call
        invertTree(root.left);
        invertTree(root.right);

        return root;
    }

    public TreeNode invertTreeIterative(TreeNode root) {
        // edge check
        if (root == null) { return null; }

        // add root node to queue
        // this will be level order traversal
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);

        while (!q.isEmpty()) {
            TreeNode node = q.poll();

            // revert left and right nodes
            TreeNode temp = node.left;
            node.left = node.right;
            node.right = temp;

            // add left node to queue
            if (node.left != null) {
                q.offer(node.left);
            }

            // add right node to queue
            if (node.right != null) {
                q.offer(node.right);
            }
        }
        return root;
    }
}
