import java.util.Arrays;

/**
 * Created by hermanwu on 11/14/17.
 */
public class PlusOne {
    public static void main(String[] args) {
        PlusOne s = new PlusOne();

        int[] test1 = new int[]{6, 7, 9};
        System.out.println(Arrays.toString(s.plusOne(test1)));
    }

    public int[] plusOne(int[] digits) {
        for (int i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }

            digits[i] = 0;
        }

        int[] result = new int[digits.length + 1];
        result[0] = 1;

        return result;
    }
}
