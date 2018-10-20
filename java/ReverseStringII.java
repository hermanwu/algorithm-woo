import java.util.Arrays;

/**
 Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string.
 If there are less than k characters left, reverse all of them.
 If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
 */

// Company: Microsoft

// O(n)

public class ReverseStringII {
    public String reverseStr(String s, int k) {
        if (s == null || s.length() == 0 || k <= 0) {
            return s;
        }

        char[] charArr = s.toCharArray();

        for (int i = 0; i < charArr.length; i = i + 2 * k) {
            reverseHelper(charArr, i, k);
        }

        return String.valueOf(charArr);
    }

    private void reverseHelper(char[] charArr, int index, int k) {
        int left = index;
        int right = index + k - 1 < charArr.length ? index + k - 1 : charArr.length - 1;

        while (left < right) {
            char temp = charArr[left];
            charArr[left] = charArr[right];
            charArr[right] = temp;
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        ReverseStringII rs2 = new ReverseStringII();

        System.out.println(rs2.reverseStr("abcdefg", 2));
    }
}
