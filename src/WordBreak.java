import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

/**
 Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

 For example, given
 s = "leetcode",
 dict = ["leet", "code"].

 Return true because "leetcode" can be segmented as "leet code".

 */
public class WordBreak {
    public static void main(String[] args) {
        String s = "leetcode";

        List<String> dict = new ArrayList<String>();
        dict.add("leet");
        dict.add("code");

        WordBreak wb = new WordBreak();
        Printer.print(wb.wordBreak(s, dict));

        // Will exceed time limit;
        Printer.print(wb.wordBreakRecursive(s, dict));
    }

    public boolean wordBreak(String s, List<String> wordDict) {
        HashSet<String> set = new HashSet<String>(wordDict);

        int n = s.length();

        boolean[] dp = new boolean[n + 1];
        dp[0] = true;

        for (int i = 1; i <= n; i++) {
            for (int j = 0; j <= i; j++) {
                if (dp[j] && set.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n];
    }

    public boolean wordBreakRecursive(String s, List<String> wordDict) {
        HashSet<String> set = new HashSet<>(wordDict);

        int n = s.length(), i;

        if (n == 0) {
            return true;
        }

        for (i = 0; i < n; i++) {
            if (set.contains(s.substring(0, i + 1))) {
                if (helper(s, set, i + 1)) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean helper(String s, HashSet<String> set, int start) {
        if (start == s.length()) {
            return true;
        }

        for (int i = start + 1; i <= s.length(); i++) {
            if (set.contains(s.substring(start, i)) && helper(s, set, i)) {
                return true;
            }
        }

        return false;
    }


}
