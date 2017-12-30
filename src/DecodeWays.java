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
