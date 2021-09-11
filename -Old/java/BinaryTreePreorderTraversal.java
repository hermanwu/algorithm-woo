// Use both recursion and iteration

import java.util.*;

public class BinaryTreePreorderTraversal {
    public List<Integer> preorderTraversalRecursive(TreeNode root) {
        List<Integer> result = new ArrayList<>();

        helper(result, root);

        return result;
    }

    private void helper(List<Integer> result, TreeNode root) {
        if (root == null) {
            return;
        }

        result.add(root.val);
        helper(result, root.left);
        helper(result, root.right);
    }

    public List<Integer> preorderTraversalDivideAndConquer(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();

        if (root == null) {
            return result;
        }

        List<Integer> left = preorderTraversalDivideAndConquer(root.left);
        List<Integer> right = preorderTraversalDivideAndConquer(root.right);

        result.add(root.val);
        result.addAll(left);
        result.addAll(right);

        return result;
    }

    public List<Integer> preorderTraversalIterative(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) {
            return result;
        }

        Stack<TreeNode> q = new Stack<>();
        q.add(root);

        while (!q.isEmpty()) {
            TreeNode cur = q.pop();

            result.add(cur.val);
            // Since this is a stack, we need to push right node first, so it will pop after the left node.
            if (cur.right != null) {
                q.push(cur.right);
            }

            if (cur.left != null) {
                q.push(cur.left);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        TreeNode root = TreeGenerator.generateTreeBalanced();

        BinaryTreePreorderTraversal btt = new BinaryTreePreorderTraversal();

        System.out.println(Arrays.toString(btt.preorderTraversalRecursive(root).toArray()));

        System.out.println(Arrays.toString(btt.preorderTraversalDivideAndConquer(root).toArray()));

        System.out.println(Arrays.toString(btt.preorderTraversalIterative(root).toArray()));
    }
}
