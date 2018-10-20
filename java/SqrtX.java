/**
 Implement int sqrt(int x).

 Compute and return the square root of x.

 x is guaranteed to be a non-negative integer.

 */
public class SqrtX {
    public int mySqrt(int x) {
        if (x == 0) {
            return 0;
        }

        int left = 1;
        int right = x;

        while (left + 1 <  right) {
            int mid = (right - left) / 2 + left;

            // use divide to avoid overflow. you can also convert int to long.
            if ( mid == x / mid) {
                return mid;
            } else if (mid < x / mid) {
                left = mid;
            } else {
                right = mid;
            }
        }

        return right < x / right ? right : left;

    }
}

