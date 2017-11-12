import java.util.*;

class TreePrinter {

    public static void printTreeNode(TreeNode root) {
        int maxLevel = TreePrinter.maxLevel(root);

        printTreeNodeInternal(Collections.singletonList(root), 1, maxLevel);
    }

    private static void printTreeNodeInternal(List<TreeNode> TreeNodes, int level, int maxLevel) {
        if (TreeNodes.isEmpty() || TreePrinter.isAllElementsNull(TreeNodes))
            return;

        int floor = maxLevel - level;
        int endgeLines = (int) Math.pow(2, (Math.max(floor - 1, 0)));
        int firstSpaces = (int) Math.pow(2, (floor)) - 1;
        int betweenSpaces = (int) Math.pow(2, (floor + 1)) - 1;

        TreePrinter.printWhitespaces(firstSpaces);

        List<TreeNode> newTreeNodes = new ArrayList<TreeNode>();
        for (TreeNode TreeNode : TreeNodes) {
            if (TreeNode != null) {
                System.out.print(TreeNode.val);
                newTreeNodes.add(TreeNode.left);
                newTreeNodes.add(TreeNode.right);
            } else {
                newTreeNodes.add(null);
                newTreeNodes.add(null);
                System.out.print(" ");
            }

            TreePrinter.printWhitespaces(betweenSpaces);
        }
        System.out.println("");

        for (int i = 1; i <= endgeLines; i++) {
            for (int j = 0; j < TreeNodes.size(); j++) {
                TreePrinter.printWhitespaces(firstSpaces - i);
                if (TreeNodes.get(j) == null) {
                    TreePrinter.printWhitespaces(endgeLines + endgeLines + i + 1);
                    continue;
                }

                if (TreeNodes.get(j).left != null)
                    System.out.print("/");
                else
                    TreePrinter.printWhitespaces(1);

                TreePrinter.printWhitespaces(i + i - 1);

                if (TreeNodes.get(j).right != null)
                    System.out.print("\\");
                else
                    TreePrinter.printWhitespaces(1);

                TreePrinter.printWhitespaces(endgeLines + endgeLines - i);
            }

            System.out.println("");
        }

        printTreeNodeInternal(newTreeNodes, level + 1, maxLevel);
    }

    private static void printWhitespaces(int count) {
        for (int i = 0; i < count; i++)
            System.out.print(" ");
    }

    private static <T extends Comparable<?>> int maxLevel(TreeNode TreeNode) {
        if (TreeNode == null)
            return 0;

        return Math.max(TreePrinter.maxLevel(TreeNode.left), TreePrinter.maxLevel(TreeNode.right)) + 1;
    }

    private static boolean isAllElementsNull(List<TreeNode> list) {
        for (TreeNode treeNode : list) {
            if (treeNode != null)
                return false;
        }

        return true;
    }

}