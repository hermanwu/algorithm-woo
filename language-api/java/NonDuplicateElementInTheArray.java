import java.util.Arrays;

/**

 Goal: You are given a list of N numbers you have to find the number which is not duplicate.

 */
public class NonDuplicateElementInTheArray {
    public static void main(String[] args) {
        NonDuplicateElementInTheArray n = new NonDuplicateElementInTheArray();

        int[] input = new int[]{1, 2, 4, 3, 4, 2, 1};
        Printer.print(n.findOneNonDuplicateElementInTheArray(input));

        int[] input2 = new int[]{1, 2, 4, 3, 5, 4, 2, 1};
        Printer.print(Arrays.toString(n.findTwoNonDuplicateElementInTheArray(input2)));
    }

    // An array with a lot of duplicated numbers, only one number is not duplicated, find that number.
    public int findOneNonDuplicateElementInTheArray(int[] input) {
        int result = input[0];

        for (int i = 1; i < input.length; i++) {
            // User XOR bit operation to find the non duplicated value.
            result ^= input[i];
        }

        return result;
    }

    public int[] findTwoNonDuplicateElementInTheArray(int[] input) {
        // Assume two non duplicate element A and B;
        // xor = A ^ B
        int xor = input[0];

        for (int i = 1; i < input.length; i++) {
            // User XOR bit operation to find the non duplicated value.
            xor ^= input[i];
        }

        // Find the right most bit 1 ( in format 1, 10, or 100, ...)
        // for details: http://algorithms.tutorialhorizon.com/find-the-right-most-set-bit-of-a-number/
        // Bit of right most bit position are different in A and B. (one is 1, the other is 0)
        // By using right most bit 1, we can divide elements into two group
        // Please memorize this bit manipulation.
        int rightMostBit = xor & ~(xor - 1);

        int A = 0, B = 0;
        for (int i = 0; i < input.length; i++) {
            if ((input[i] & rightMostBit) != 0) {
                A ^= input[i];
            } else {
                B ^= input[i];
            }
        }

        return new int[]{A, B};
    }
}
