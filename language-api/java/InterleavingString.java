/**
 Given three strings: s1, s2, s3, determine whether s3 is formed by the interleaving of s1 and s2.

 For s1 = "aabcc", s2 = "dbbca"

 When s3 = "aadbbcbcac", return true.
 When s3 = "aadbbbaccc", return false.

 */

public class InterleavingString {
    public static void main(String[] args) {
        InterleavingString is = new InterleavingString();

        String s1 = "aabcc";
        String s2 = "dbbca";

        String s3 = "aadbbcbcac";

        Printer.print(is.isInterleave(s1, s2, s3));

        Printer.print(is.isInterleaveDFS(s1, s2, s3));
    }

    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) {
            return false;
        }

        int m = s1.length();
        int n = s2.length();

        boolean[][] f = new boolean[m + 1][n + 1];
        f[0][0] = true;

        // Initialize f[i][0];
        for (int i = 1; i <= m; i++) {
            if (s1.charAt(i - 1) == s3.charAt(i - 1) && f[i - 1][0]) {
                f[i][0] = true;
            }
        }

        // Initialize f[0][j]
        for (int i = 1; i <= n; i++) {
            if (s2.charAt(i - 1) == s3.charAt(i - 1) && f[0][i - 1]) {
                f[0][i] = true;
            }
        }

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (((s1.charAt(i - 1) == s3.charAt(i + j - 1)) && f[i - 1][j]) ||
                        ((s2.charAt(j - 1) == s3.charAt(i + j - 1)) && f[i][j - 1])) {
                    f[i][j] = true;
                }
            }
        }

        return f[m][n];
    }

    public boolean isInterleaveRollingArray(String s1, String s2, String s3) {
        return false;
    }

    public boolean isInterleaveDFS(String s1, String s2, String s3) {
        char[] s1char = s1.toCharArray();
        char[] s2char = s2.toCharArray();
        char[] s3char = s3.toCharArray();

        if (s1char.length + s2char.length != s3char.length) {
            return false;
        }

        boolean[][] valid = new boolean[s1char.length + 1][s2char.length + 1];

        for (int i = 0; i <= s1char.length; i++) {
            for (int j = 0; j <= s2char.length; j++) {
                valid[i][j] = true;
            }
        }

        for (int i = 1; i <= s1char.length; i++) {
            if (s1char[i - 1] != s3char[i - 1]) {
                valid[i][0] = false;
            }
        }

        for (int j = 1; j <= s2char.length; j++) {
            if (s2char[j - 1] != s3char[j - 1]) {
                valid[0][j] = false;
            }
        }

        return dfs(s1char, s2char, s3char, 0, 0, 0, valid);
    }

    private boolean dfs(char[] s1char, char[] s2char, char[] s3char, int i, int j, int k, boolean[][] valid) {
        if (valid[i][j] == false) {
            return false;
        }
        if (k == s3char.length) {
            return true;
        }

        if (i < s1char.length && s1char[i] == s3char[k] && dfs(s1char, s2char, s3char, i + 1, j, k + 1, valid) ||
            j < s2char.length && s2char[j] == s3char[k] && dfs(s1char, s2char, s3char, i, j + 1, k + 1, valid)
        ) {
            valid[i][j] = true;
        } else {
            valid[i][j] = false;
        }

        return valid[i][j];
    }
}