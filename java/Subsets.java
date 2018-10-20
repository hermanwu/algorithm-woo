import java.util.ArrayList;
import java.util.List;

/**

 Given a set of distinct integers, nums, return all possible subsets (the power set).

 Note: The solution set must not contain duplicate subsets.

 For example,
 If nums = [1,2,3], a solution is:

 [
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
 ]

 */
public class Subsets {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        // sorting is not necessary since all integers are distinct.
        //Arrays.sort(nums);

        helper(result, new ArrayList<>(), nums, 0);

        return result;
    }

    private void helper(List<List<Integer>> result,
                        List<Integer> cur,
                        int[] nums,
                        int startIndex) {

        result.add(new ArrayList<>(cur));

        // if startIndex == nums.length,
        // this loop will not be triggered.
        for (int i = startIndex; i < nums.length; i++) {

            cur.add(nums[i]);

            helper(result, cur, nums, i + 1);
            // backtracking
            cur.remove(cur.size() - 1);
        }
    }
}
