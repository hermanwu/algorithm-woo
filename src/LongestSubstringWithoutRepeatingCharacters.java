/**
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

public class LongestSubstringWithoutRepeatingCharacters {
    public static void main(String[] args) {
        LongestSubstringWithoutRepeatingCharacters l = new LongestSubstringWithoutRepeatingCharacters();

        Printer.printResultComparsion(l.lengthOfLongestSubstring("pwwkew"), 3);
    }

    public int lengthOfLongestSubstring(String s) {
        int[] map = new int[256];

        int left = 0, right = 0, ans = 0;

        for (left = 0; left < s.length(); left++) {
            while (right < s.length()) {
                if (map[s.charAt(right)] == 0) {
                    ans = Math.max(ans, right - left + 1);
                    map[s.charAt(right)]++;
                    right++;
                } else {
                    break;
                }
            }
            map[s.charAt(left)]--;
        }
        return ans;
    }
m
    public int lengthOfLongestSubstring2(String s) {
        int leftBound = 0, rightBound = 0, n = s.length();
        int[] map = new int[256];
        int result = 0;

        while (rightBound < n) {
            char rightCharacter = s.charAt(rightBound);

            if (map[rightCharacter] > 0) {
                leftBound = Math.max(leftBound, map[rightCharacter]);
            }

            // update left bound index if rightCharacter appears again;
            map[rightCharacter] = rightBound + 1;

            result = Math.max(result, rightBound - leftBound + 1);

            rightBound++;
        }

        return result;
    }

    public int lengthOfLongestSubstring3(String s) {
        int i = 0, j = 0;
        int n = s.length();

        int result = 0;
        int[] repeated = new int[256];

        while(j < n) {
            repeated[s.charAt(j)]++;

            while (repeated[s.charAt(j)] > 1) {
                repeated[s.charAt(i)]--;
                i++;
            }

            result = Math.max(result, j - i + 1);
            j++;
        }

        return result;
    }
}
