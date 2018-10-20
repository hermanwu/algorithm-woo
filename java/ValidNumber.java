/**
Twitter:
Github (all solutions) : https://github.com/hermanwu/codeWoo/tree/master/src

 Validate if a given string is numeric.

 'e10' => false;
 '..10' => false;
 'abc' => false;
 '1 0' => false;


 */
public class ValidNumber {
    /**
     * @param s: the string that represents a number
     * @return: whether the string is a valid number
     */
    public boolean isNumber(String s) {
        // write your code here
        int len = s.length();
        int left = 0, right = len - 1;

        while (left <= right &&
                Character.isWhitespace(s.charAt(left))) {
            left++;
        }

        if (left > right) {
            return false;
        }

        while (right >= left &&
                Character.isWhitespace(s.charAt(right)) ) {
            right--;
        }

        if (s.charAt(left) == '+' || s.charAt(left) == '-') {
            left++;
        }

        boolean isValidNum = false;
        boolean hasDot = false;
        boolean hasE = false;

        while (left <= right) {
            char c = s.charAt(left);

            if (Character.isDigit(c)) {
                isValidNum = true;
            } else if (c == '.') {
                if (hasDot || hasE) {
                    return false;
                }
                hasDot = true;
            } else if (c == 'e') {
                if (hasE || !isValidNum) {
                    return false;
                }
                hasE = true;
                isValidNum = false;
            } else if (c == '+' || c == '-') {
                if (s.charAt(left - 1) != 'e') {
                    return false;
                }
            } else {
                return false;
            }
            left++;
        }
        return isValidNum;
    }
}

