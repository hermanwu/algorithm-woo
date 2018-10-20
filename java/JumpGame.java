/**
 * Created by hermanwu on 11/11/17.
 */
public class JumpGame {
    public boolean canJump(int[] A) {

        int n = A.length;
        boolean[] f = new boolean[n];

        int i, j;

        f[0] = true;

        for (i = 1; i < n; i++) {
            f[i] = false;

            for (j = 0; j < i; j++) {
                if (f[j] && j + A[j] >= i) {
                    f[i] = true;
                    break;
                }
            }

        }

        return f[n - 1];
    }

    public boolean canJumpWithGreedyAlgorithm(int[] nums) {
        int max = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > max) {
                return false;
            }

            max = Math.max(nums[i] + i, max);
        }

        return true;
    }
}
