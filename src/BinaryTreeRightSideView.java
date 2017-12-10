import java.util.ArrayList;
import java.util.List;

/**
Givwn a binary tree. Image yourself is on the right side of it. Output the right most node of each level.

 */
public class BinaryTreeRightSideView {
    public static void main(String[] args) {
        BinaryTreeRightSideView btrs = new BinaryTreeRightSideView();

        Printer.printIntegerList(btrs.rightSideView(TreeGenerator.generateTreeLeftHeavy()));

        Printer.printIntegerList(btrs.rightSideView(TreeGenerator.generateTreeBalanced()));
    }

    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();

        if (root == null) {
            return result;
        }

        helper(result, root, 1);

        return result;
    }

    public void helper(List<Integer> result, TreeNode cur, int level) {
        if (cur == null) {
            return;
        }

        if (result.size() < level) {
            result.add(cur.val);
        }

        helper(result, cur.right, level + 1);
        helper(result, cur.left, level + 1);
    }
}
