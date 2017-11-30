import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class SerializeAndDeserializeBinaryTree {
    public static void main(String[] args) {

        // test case 1
        TreeNode root1 = new TreeNode(1);
        root1.left = new TreeNode(2);
        test(root1);

        // test case 2
        TreeNode root2 = null;
        test(root2);
    }

    public static void test(TreeNode root) {
        SerializeAndDeserializeBinaryTree sd = new SerializeAndDeserializeBinaryTree();

        String serializationString = sd.serialize(root);
        System.out.println(serializationString);

        TreeNode tree = sd.deserialize(serializationString);
        TreePrinter.printTreeNode(tree);
    }

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();

        serializationHelper(sb, root);

        return sb.toString();
    }

    private void serializationHelper(StringBuilder sb, TreeNode node) {
        if (node == null) {
            sb.append("#").append(",");
        } else {
            sb.append(node.val).append(",");
            serializationHelper(sb, node.left);
            serializationHelper(sb, node.right);
        }
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Queue<String> q = new LinkedList<>();

        // public String[] split(String regex)
        // public static <T> List<T> asList(T... a)
        q.addAll(Arrays.asList(data.split(",")));

        return deserializationHelper(q);
    }

    private TreeNode deserializationHelper(Queue<String> q) {
        String val = q.poll();
        if (val.equals("#")) {
            return null;
        } else {
            TreeNode node = new TreeNode(Integer.valueOf(val));
            node.left = deserializationHelper(q);
            node.right = deserializationHelper(q);
            return node;
        }
    }
}
