public class Solution {
    /**
     * @param n: The total number of stones.
     * @param m: The total number of stones you can remove.
     * @param target: The distance from the end to the starting point.
     * @param d: The array that the distance from the i rock to the starting point is d[i].
     * @return: Return the maximum value of the shortest jump distance.
     */
    public int getDistance(int n, int m, int target, List<Integer> d) {
        d.add(0, 0);
        d.add(target);
        int left = 0, right = target;
        while (left < right) {
            int mid = left + (right - left + 1 >> 1);
            if (isValid(m, mid, d)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    private boolean isValid(int m, int limit, List<Integer> list) {
        int count = 0, lastPos = 0;
        for (int i = 1; i < list.size(); ++i) {
            if (list.get(i) - lastPos < limit) {
                count++;
            } else {
                lastPos = list.get(i);
            }
        }
        return count <= m;
    }
}