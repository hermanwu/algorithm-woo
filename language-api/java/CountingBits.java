/*
 Given a non negative integer number num.
 for each num, calculate the number of 1's in their binary representation and return them as an array.
 */


import java.util.Arrays;

public class  CountingBits {
    public static void main(String[] args) {
        CountingBits cb = new CountingBits();

        // test 1
        // give num = 5;
        // return [0, 1, 1, 2, 1, 2]
        int[] test1Result = cb.countBits(5);
        System.out.println(Arrays.toString(test1Result));
    }

    public int[] countBits(int num) {
        int[] result = new int[num + 1];
        int i;

        for (i = 1; i <= num; i++) {
            result[i] = result[i >> 1] + (i & 1);
        }

        return result;
    }
}
