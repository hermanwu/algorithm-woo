import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/**
 *
 */
public class BinaryTreeLevelOrderTraversal {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new LinkedList<List<Integer>>();
        Queue<TreeNode> q = new LinkedList<>();

        if (root == null) {
            return result;
        }

        q.offer(root);

        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> l = new ArrayList<>();

            for (int i = 0; i < size; i++) {
                TreeNode temp = q.poll();
                l.add(temp.val);
                if (temp.left != null) {
                    q.offer(temp.left);
                }

                if (temp.right != null) {
                    q.offer(temp.right);
                }
            }
            result.add(l);
        }

        return result;
    }
}
