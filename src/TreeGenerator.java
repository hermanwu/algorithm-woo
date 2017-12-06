public class TreeGenerator {
    public static void main(String[] args) {
        generateTreeBalanced();
        generateTreeLeftHeavy();
        generateTreeRightHeavy();
    }

    public static TreeNode generateTreeEmpty() {
        return generateTreeWithArray(new int[]{});
    }

    public static TreeNode generateTreeBalanced() {
        return generateTreeWithArray(new int[]{5, 3, 7, 2, 4, 6, 8});
    }

    public static TreeNode generateTreeLeftHeavy() {
        return generateTreeWithArray(new int[]{1, 4, -1, 3, 5});
    }


    public static TreeNode generateTreeRightHeavy() {
        return generateTreeWithArray(new int[]{1, -1, 7, -1, -1, 6, 8});
    }


    public static TreeNode generateTreeWithArray(int[] arr) {
        if (arr == null || arr.length == 0) {
            return null;
        }

        int index = 0;
        TreeNode root = new TreeNode(arr[0]);

        helper(root, 0, arr);

        TreePrinter.printTreeNode(root);

        return root;
    }

    public static void helper(TreeNode root, int index, int[] arr) {
        int leftIndex = 2 * index + 1;
        int rightIndex = 2 * index + 2;
        if (leftIndex < arr.length) {

            if (arr[leftIndex] != -1) {
                root.left = new TreeNode(arr[leftIndex]);
                helper(root.left, leftIndex, arr);
            }
        }

        if (rightIndex < arr.length) {

            if (arr[rightIndex] != -1) {
                root.right = new TreeNode(arr[rightIndex]);
                helper(root.right, rightIndex, arr);
            }
        }
    }
}
