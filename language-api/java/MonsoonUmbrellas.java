import java.util.Arrays;

/**
 * Created by hermanwu on 1/24/18.
 */
public class MonsoonUmbrellas {
    public static void main(String[] args) {
        Printer.print(getUmbrellas(4, new int[]{2, 4}));
        Printer.print(getUmbrellas(4, new int[]{1, 1, 1}));
        Printer.print(getUmbrellas(4, new int[]{1,1,1,1,3,0,5}));
    }

    static int maxCount;

    static int getUmbrellas(int n, int[] p) {

        maxCount = p.length + 1;

        Arrays.sort(p);

        helper(0, 0, 0, n, p);

        return maxCount == p.length + 1 ? -1 : maxCount;
    }

    static void helper(int curCount, int index, int sumOfPeople, int n, int[] p) {
        if (maxCount < p.length + 1) {
            return;
        }

        if (sumOfPeople > n) {
            return;
        }

        if (sumOfPeople == n) {
            maxCount = Math.min(maxCount, curCount);
            return;
        }

        for (int i = p.length - 1; i >= 0; i--) {
            sumOfPeople += p[i];
            curCount++;

            helper(curCount, i - 1, sumOfPeople, n, p);

            sumOfPeople -= p[i];
            curCount--;
        }
    }
}
