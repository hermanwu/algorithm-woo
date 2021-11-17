/**
 Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

 Example:

 Input: "babad"

 Output: "bab"

 Note: "aba" is also a valid answer.
 Example:

 Input: "cbbd"

 Output: "bb"

 */
public class LongestPalindromicSubstring {
    public static void main(String[] args) {
        LongestPalindromicSubstring l = new LongestPalindromicSubstring();

        Printer.printResultComparsion(l.longestPalindrome("babad"), "bab");
    }

    public String longestPalindrome(String s) {
        char[] arr = s.toCharArray();
        int n = arr.length, i, maxLen = 0;
        String res = "";

        for (i = 0; i < n; i++) {
            // check string two characters bigger than current max;
            if (isPalindrome(s, i - maxLen - 1, i)) {
                res = s.substring(i - maxLen - 1, i + 1);
                maxLen = maxLen + 2;
            }

            // check string one character bigger than current max;
            if (isPalindrome(s, i - maxLen, i)) {
                res = s.substring(i - maxLen, i + 1);
                maxLen = maxLen + 1;
            }
        }

        return res;
    }

    public boolean isPalindrome(String s, int start, int end) {
        if (start < 0 || end >= s.length()) {
            return false;
        }

        while (start < end) {
            if (s.charAt(start) == s.charAt(end)) {
                start++;
                end--;
            } else {
                return false;
            }
        }
        return true;
    }

    public String longestPalindromeUsingDp(String s) {
        String result = null;
        int n = s.length();

        // dp[leftBound][rightBound] represents
        // whether substring(leftBound, rightBound+1) is palindrome.
        boolean[][] dp = new boolean[n][n];

        for (int rightBound = 0; rightBound < n; rightBound++) {
            for (int leftBound = rightBound; leftBound >= 0; leftBound--) {
                if (s.charAt(leftBound) == s.charAt(rightBound)) {
                    // update dp matrix
                    if (rightBound - leftBound <= 2 ||
                            dp[leftBound + 1][rightBound - 1]) {
                        dp[leftBound][rightBound] = true;

                        // update string with max length.
                        if (result == null ||
                                (rightBound - leftBound + 1 > result.length())) {
                            result = s.substring(leftBound, rightBound + 1);
                        }
                    }
                }
            }
        }

        return result;
    }}
