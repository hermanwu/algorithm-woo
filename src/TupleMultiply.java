/**
 * Created by hermanwu on 3/24/18.
 */
public class TupleMultiply {
    public long tupleMultiply(String tuple, int n) {
        // Write your code here
        long ans = 1;
        char[] s = tuple.toCharArray();
        int num = 0, neg = 1, idx = 0;
        for (int i = 0; i < s.length; i++) {
            if (s[i] == '-') {
                neg = -1;
            } else if (s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + s[i] - '0';
            } else if (s[i] == ')') {
                idx++;
                if (idx == n) {
                    ans *= num * neg;
                }
            } else if (s[i] == ',') {
                idx++;
                if (idx == n) {
                    ans *= num * neg;
                }
                num = 0;
                neg = 1;
            } else if (s[i] == '(') {
                idx = 0;
                num = 0;
                neg = 1;
            }
        }
        return ans;
    }
}
