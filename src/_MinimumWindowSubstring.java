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

public class _MinimumWindowSubstring {
    public String minWindow(String source , String target) {
        // write your code here

        int left = 0;
        int right = 0;
        int min = Integer.MAX_VALUE;
        int[] map = new int[256];
        int startIndex = 0;
        int total = 0;

        for (int i = 0; i < target.length(); i++) {
            map[target.charAt(i)]++;
            total++;
        }

        for (left = 0; left < source.length(); left++) {
            while (right < source.length() && total > 0) {
                if (map[source.charAt(right)] > 0) {
                    total--;
                }
                map[source.charAt(right)]--;
                right++;
            }
            if (total == 0 && (right - left) < min) {
                startIndex = left;
                min = right - left;
            }

            if (map[source.charAt(left)] >= 0) {
                total++;
            }
            map[source.charAt(left)]++;
        }

        return min == Integer.MAX_VALUE ? "" :
                source.substring(startIndex, startIndex + min);
    }


    public String minWindow3(String s, String t) {
        int[] cnt = new int[128];

        // count all t's appearence.
        // when total is zero, it means it is valid substring
        for (char c : t.toCharArray()) {
            cnt[c]++;
        }

        int from = 0;
        int total = t.length();
        int min = Integer.MAX_VALUE;

        for (int right = 0, left = 0; right < s.length(); right++) {
            // ====== handle right pointer
            if (cnt[s.charAt(right)] > 0) {
                // when we find a target character, we decrease total.
                total--;
            }
            cnt[s.charAt(right)]--;


            // ====== start to deal with left pointer
            // If total is still zero, we keep move left pointer.
            while (total == 0) {
                // find a new minimum
                if (right - left  +  1 < min) {
                    min = right - left + 1;
                    from = left;
                }

                cnt[s.charAt(left)]++;
                if (cnt[s.charAt(left)] > 0) {
                    total++;
                }
                left++;
            }

        }

        return (min == Integer.MAX_VALUE) ? "" : s.substring(from, from + min);
    }

    public String minWindow2(String s, String target) {
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
