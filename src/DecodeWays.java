/**

 A message containing letters from A-Z is being encoded to numbers using the following mapping:

 'A' -> 1
 'B' -> 2
 ...
 'Z' -> 26
 Given an encoded message containing digits, determine the total number of ways to decode it.

 */
public class DecodeWays {
    public static void main(String[] args) {
        DecodeWays d = new DecodeWays();

        Printer.printResultComparsion(d.numDecodings("12"), 2);
    }

    public int numDecodings(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        int n = s.length();
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = s.charAt(0) == '0' ? 0 : 1;
        for (int i = 2; i <= n; i++) {
            int first = Integer.valueOf(s.substring(i - 1, i));
            int second = Integer.valueOf(s.substring(i - 2, i));
            if (first >= 1 && first <= 9) {
                dp[i] += dp[i-1];
            }

            if (second <= 26 && second >= 10) {
                dp[i] += dp[i-2];
            }
        }

        return dp[n];
    }

    public int numDecodings2(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        int[] result = new int[s.length() + 1];
        result[0] = 1;

        if (s.charAt(0) != '0') {
            result[1] = 1;
        }

        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) != '0') {
                result[i+1] = result[i];
            }

            if (s.charAt(i - 1) == '1') {
                result[i + 1] = result[i + 1] + result[i - 1];
            }

            if (s.charAt(i - 1) == '2' && (s.charAt(i) - '0') <= 6) {
                result[i + 1] = result[i + 1] + result[i - 1];
            }
        }

        return result[s.length()];
    }

    public int numDecodings3(String s) {

        int n = s.length();

        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return s.charAt(0) == '0' ? 0 : 1;
        }

        int[] results = new int[n + 1];

        // handle first two digits
        if (s.charAt(0) == '0') {
            results[1] = 0;
            results[2] = s.charAt(1) == '0' ? 0 : 1;
        } else {
            results[1] = 1;

            results[2] = s.charAt(1) == '0' ? 0 : 1;

            int firstTwo = (s.charAt(0) - '0') * 10 + (s.charAt(1) - '0');

            if (firstTwo >= 10 && firstTwo <= 26) {
                results[2] += 1;
            }
        }

        for (int i = 3; i <= s.length(); i++) {
            if (s.charAt(i - 1) != '0') {
                results[i] = results[i-1];
            }

            int twoDigits = (s.charAt(i - 2) - '0') * 10 +
                    (s.charAt(i - 1) - '0');

            if (twoDigits >= 10 && twoDigits <= 26) {
                results[i] += results[i - 2];
            }
        }

        return results[n];
    }
}
