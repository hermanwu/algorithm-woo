package util;

/**
 */
public class AddTwoBinary {
    public String addBinary(String a, String b) {
        int carry = 0;
        int i = a.length() - 1;
        int j = b.length() - 1;
        StringBuilder result = new StringBuilder();

        while (i >= 0 || j >= 0) {
            if (i >= 0) {
                carry += a.charAt(i) - '0';
                i--;
            }

            if (j >= 0) {
                carry += b.charAt(j) - '0';
                j--;
            }

            result.append(carry % 2);
            carry = carry / 2;
        }

        if (carry != 0) {
            result.append(carry);
        }

        return result.reverse().toString();
    }
}
