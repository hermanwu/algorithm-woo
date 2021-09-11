public class SameTree {
    public static void main(String[] args) {
        TreeNode tree1 = TreeGenerator.generateTreeLeftHeavy();
        TreeNode tree2 = TreeGenerator.generateTreeLeftHeavy();

        SameTree st = new SameTree();
        System.out.println(st.isSameTree(tree1, tree2));

    }

    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) {
            return true;
        }

        if (p == null || q == null) {
            return false;
        }

        if (p.val != q.val) {
            return false;
        }

        return isSameTree(p.left, p.left) && isSameTree(q.right, q.right);
    }
}
