/**
 Divide two integers without using multiplication, division and mod operator.

 If it is overflow, return MAX_INT.
 */

public class DivideTwoIntegers {
    public int divide(int dividend, int divisor) {
        int sign = 1;

        if ((dividend > 0 && divisor < 0)||(dividend < 0 && divisor > 0)) {
            sign = -1;
        }

        // convert long to handle -2147483648 / -1 situation
        long ldividend = Math.abs((long) dividend);
        long ldivisor = Math.abs((long) divisor);

        if (ldivisor == 0) {
            return Integer.MAX_VALUE;
        }

        if ((ldividend == 0) || (ldividend < ldivisor)) {
            return 0;
        }

        long lans = longDivide(ldividend, ldivisor);

        int ans;
        if (lans > Integer.MAX_VALUE) {
            ans = (sign == 1)? Integer.MAX_VALUE : Integer.MIN_VALUE;
        } else {
            ans = (int) (sign * lans);
        }

        return ans;
    }

    private long longDivide(long dividend, long divisor) {
        if (dividend < divisor) return 0;

        long sum = divisor;
        long multiple = 1;

        while ((sum + sum) <= dividend){
            sum += sum;
            multiple += multiple;
        }

        return multiple + longDivide(dividend - sum, divisor);
    }
}
