import java.util.HashSet;
import java.util.Set;

/**
 Given a string which consists of lowercase or uppercase letters,
 find the length of the longest palindromes that can be built with those letters.

 This is case sensitive, for example "Aa" is not considered a palindrome here.

 Note:
 Assume the length of given string will not exceed 1,010.

 Example:

 Input:
 "abccccdd"

 Output:
 7

 Explanation:
 One longest palindrome that can be built is "dccaccd", whose length is 7.

 */
public class LongestPalindrome {
    public int longestPalindrome(String s) {
        Set<Character> appeared  = new HashSet<>();
        char[] arr = s.toCharArray();
        int n = arr.length, i;
        int res = 0;

        for (i = 0; i < n; i++) {
            if (!appeared.contains(arr[i])) {
                appeared.add(arr[i]);
            } else {
                appeared.remove(arr[i]);
                res += 2;
            }
        }

        if (appeared.size() > 0) {
            res++;
        }

        return res;
    }
}
