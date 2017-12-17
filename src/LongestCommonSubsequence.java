/**
- Given two string A and B
- Remove different number of characters from both Strings.
- what left is called subsequence.
- Find the longest common subsequence of both strings.

 Example:
 For "ABCD" and "EDCA", the LCS is "A" (or "D", "C"), return 1.
 For "ABCD" and "EACB", the LCS is "AC", return 2.

*/

public class LongestCommonSubsequence {
    public static void main(String[] args) {
        String A = "ABCD";
        String B = "EACB";

        LongestCommonSubsequence lcs = new LongestCommonSubsequence();
        Printer.print(lcs.longestCommonSubsequence(A, B));

        lcs = new LongestCommonSubsequence();
        Printer.print(lcs.longestCommonSubsequence(A, B));
    }

    public int longestCommonSubsequence(String A, String B) {
        int a = A.length();
        int b = B.length();

        int[][] f = new int[a + 1][b + 1];

        for (int i = 1; i <= a; i++) {
            for (int j = 1; j <= b; j++) {
                f[i][j] = Math.max(f[i - 1][j], f[i][j - 1]);

                if (A.charAt(i - 1) == B.charAt(j - 1)) {
                    f[i][j] = Math.max(f[i][j], f[i - 1][j - 1] + 1);
                }
            }
        }
        return f[a][b];
    }

    public int longestCommonSubsequenceWithOneDimensionRollingArray(String A, String B) {
        int a = A.length();
        int b = B.length();

        int[] oldArray = new int[b + 1];

        for (int i = 1; i <= a; i++) {
            int[] newArray = new int[b + 1];

            for (int j = 1; j <= b; j++) {
                newArray[j] = Math.max(oldArray[j], newArray[j - 1]);

                if (A.charAt(i - 1) == B.charAt(j - 1)) {
                    newArray[j] = Math.max(newArray[j], oldArray[j - 1] + 1);
                }
            }
            oldArray = newArray;
        }
        return oldArray[b];
    }
}