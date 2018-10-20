import java.util.Stack;

/**
 * Created by hermanwu on 3/21/18.
 */
public class IsValidBST {
    public boolean isValidBST2(TreeNode root) {
        return helper(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean isValidBST(TreeNode root) {
        // use pre to compare
        TreeNode pre = null;

        Stack<TreeNode> stack = new Stack<>();

        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }

            root = stack.pop();

            // compare with pre and set pre
            if (pre != null && pre.val >= root.val) {
                return false;
            }
            pre = root;

            root = root.right;
        }

        return true;
    }


    public boolean helper(TreeNode node, long min, long max) {
        if (node == null) {
            return true;
        }

        if (node.val >= max || node.val <= min) {
            return false;
        }

        return helper(node.left, min, node.val) & helper(node.right, node.val, max);
    }
}
