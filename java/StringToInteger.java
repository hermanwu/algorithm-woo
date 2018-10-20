/**
 * Created by hermanwu on 12/31/17.
 */
public class StringToInteger {
    public static void main(String[] args) {
        StringToInteger s = new StringToInteger();

        String input = "-214748367";

        Printer.print(s.myAtoi(input));
    }

    public int myAtoi(String str) {
        if (str == null || str.length() == 0) {
            return 0;
        }

        int i = 0, sign = 1, result = 0;

        char[] arr = str.toCharArray();
        int n = arr.length;

        // Handle empty string
        while(arr[i] == ' ' && i < n) {
            i++;
        }

        // Handle sign
        if (i < n && (arr[i] == '+' || arr[i] == '-')) {
            sign = arr[i] == '+' ? 1 : -1;
            i++;
        }

        while (i < n) {
            int digit = arr[i] - '0';

            if (digit < 0 || digit > 9) {
                break;
            }

            if (Integer.MAX_VALUE / 10  < result ||
                Integer.MAX_VALUE / 10 == result && Integer.MAX_VALUE % 10 < digit) {
                    return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            result = result * 10 + digit;
            i++;
        }
        return result * sign;
    }
}