public class DistanceBetweenBSTNodes {
    public TreeNode root;


    public static void main(String[] args) {
        DistanceBetweenBSTNodes distanceBetweenBSTNodes = new DistanceBetweenBSTNodes();
        TreePrinter tp = new TreePrinter();

        int[] nodes = new int[]{5,6,3,1,2,4};

        TreeNode root = distanceBetweenBSTNodes.buildBst(nodes);

        tp.printTreeNode(root);

        if (distanceBetweenBSTNodes.searchPathLength(nodes, 1, 4 ) == 2) {
            System.out.println("correct");
        };
        if (distanceBetweenBSTNodes.searchPathLength(nodes, 2, 6 ) == 4) {
            System.out.println("correct");
        };
    }

    public int searchPathLength(int[] nodes, int node1, int node2) {
        TreeNode root = buildBst(nodes);

        TreeNode ancester = lca(root, node1, node2);

        int depth1 = getDepth(ancester, node1);
        //System.out.println(depth2);

        int depth2 = getDepth(ancester, node2);
        //System.out.println(depth3);

        int result = depth1 + depth2;

        return result;
    }

    public TreeNode buildBst(int[] nodes) {

        root = new TreeNode(nodes[0]);

        for (int i = 1; i < nodes.length; i++) {
            insertNode(root, nodes[i]);
        }

        return root;
    }

    public void insertNode(TreeNode cur, int toInsert) {
        if (cur.val > toInsert) {
            if (cur.left == null) {
                cur.left = new TreeNode(toInsert);
            } else {
                insertNode(cur.left, toInsert);
            }
        } else {
            if (cur.right == null) {
                cur.right = new TreeNode(toInsert);
            } else {
                insertNode(cur.right, toInsert);
            }
        }
    }

    public int getDepth(TreeNode curr, int target) {
        if (curr == null) {
            return -1;
        }

        if (curr.val == target) {
            return 0;
        }

        int left = getDepth(curr.left, target);
        int right = getDepth(curr.right, target);

        if (left == -1 && right == -1) {
            return -1;
        }

        return left == -1 ? right + 1 : left + 1;
    }

    public TreeNode lca(TreeNode root, int node1, int node2) {
        if (root == null) {
            return null;
        }

        if (root.val == node1 || root.val == node2) {
            return root;
        }

        TreeNode left = lca(root.left, node1, node2);
        TreeNode right = lca(root.right, node1, node2);

        if (left != null && right != null) {
            return root;
        }

        return left == null ? right : left;
    }
}


