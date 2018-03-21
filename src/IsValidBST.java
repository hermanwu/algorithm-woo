/**
 * Created by hermanwu on 3/21/18.
 */
public class IsValidBST {
    public boolean isValidBST(TreeNode root) {
        return helper(root, Long.MIN_VALUE, Long.MAX_VALUE);
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
