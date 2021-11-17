/**


 138. Subarray Sum
 Given an integer array, find a subarray where the sum of numbers is zero. Your code should return the index of the first number and the index of the last number.

 Example
 Given [-3, 1, 2, -3, 4], return [0, 2] or [1, 3].

 */
public class SubarraySum {

    public List<Integer> subarraySum(int[] nums) {
        // write your code here
        int len = nums.length;

        List<Integer> ans = new ArrayList<>();
        HashMap<Integer, Integer> map = new HashMap<>();

        int cur = 0;
        map.put(cur, -1);

        for (int i = 0; i < nums.length; i++) {
            cur += nums[i];
            if (map.containsKey(cur)) {
                ans.add(map.get(cur) + 1);
                ans.add(i);
                return ans;
            }
            map.put(cur, i);
        }

        return ans;
    }
}
