import java.util.Arrays;
import java.util.List;

/**
 * Created by hermanwu on 12/7/17.
 */
public class Printer {
    public static void print(Object input) {
        System.out.println(input);
    }

    public static void printArray(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }

    public static void printIntegerList(List<Integer> list) {
        System.out.println(Arrays.toString(list.toArray()));
    }

    public static void printBooleanMatrix(boolean[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println("");
        }

    }

    public static void printListNode(ListNode node) {
        ListNode temp = node;
        while (temp != null && temp.next != null) {
            System.out.print(temp.val + "->");
            temp = temp.next;
        }
        System.out.println(temp.val);
    }

    public static void printIntMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println("");
        }
    }

    public static void printResultComparsion(Object a, Object b) {
        if (a == b || a.equals(b)) {
            Printer.print("correct");
        } else {
            Printer.print("NOT CORRECT");
        }
    }
}
