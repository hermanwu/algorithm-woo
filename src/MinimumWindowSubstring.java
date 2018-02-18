import java.util.HashMap;

/**

 Given a string S and a string T, find the minimum window in
 S which will contain all the characters in T in complexity O(n).

 For example,
 S = "ADOBECODEBANC"
 T = "ABC"
 Minimum window is "BANC".

 Note:
 If there is no such window in S that covers all characters in T,
 return the empty string "".
 If there are multiple such windows, you are guaranteed that there
 will always be only one unique minimum window in S.

 */

public class MinimumWindowSubstring {
    public String minWindow(String s, String target) {
        HashMap<Character, Integer> targetCharMap = new HashMap();

        // ceate hashmap with all possible value;
        for (char c : s.toCharArray()) {
            targetCharMap.put(c, 0);
        }

        // Track all the appearance in target arrary
        for (char c : target.toCharArray()) {
            if (targetCharMap.containsKey(c)) {
                targetCharMap.put(c, targetCharMap.get(c) + 1);
            } else {
                return "";
            }
        }

        int start = 0, end = 0, targetCount = target.length();
        int resultStartIndex = 0;
        int result = Integer.MAX_VALUE;

        while(end < s.length()) {
            char c1 = s.charAt(end);
            if (targetCharMap.get(c1) > 0) {
                targetCount--;
            }

            targetCharMap.put(c1, targetCharMap.get(c1) - 1);
            end++;

            // Move left index to find shorter result.
            while (targetCount == 0) {
                if (result > end - start) {
                    result = end - start;
                    resultStartIndex = start;
                }

                char c2 = s.charAt(start);
                targetCharMap.put(c2, targetCharMap.get(c2) + 1);

                if (targetCharMap.get(c2) > 0) {
                    targetCount++;
                }

                start++;
            }
        }

        return result == Integer.MAX_VALUE ? "" :
                s.substring(resultStartIndex, resultStartIndex + result);
    }

}
