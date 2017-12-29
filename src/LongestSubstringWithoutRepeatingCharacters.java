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
