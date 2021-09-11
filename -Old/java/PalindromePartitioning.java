import java.util.LinkedList;
import java.util.List;

/**

 Given a string s, partition s such that every substring of the partition is a palindrome.

 Return all possible palindrome partitioning of s.

 For example, given s = "aab",
 Return

 [
 ["aa","b"],
 ["a","a","b"]
 ]


 */
public class PalindromePartitioning {
    public List<List<String>> partition(String s) {
        List<List<String>> results = new LinkedList<>();
        helper(results, new LinkedList<>(), s, 0);
        return results;
    }

    public void helper(List<List<String>> results, List<String> cur, String s, int start) {
        if (start == s.length()) {
            results.add(new LinkedList<>(cur));
            return;
        }

        for (int i = start + 1; i <= s.length(); i++) {
            if (isPalindrome(s.substring(start, i))) {

                cur.add(s.substring(start, i));

                helper(results, cur, s, i);

                cur.remove(cur.size() - 1);
            }
        }
    }

    private boolean isPalindrome(String s) {
        int start = 0;
        int end = s.length() - 1;

        while (start < end) {
            if (s.charAt(start) != s.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}
