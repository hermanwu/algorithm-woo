import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**

 Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

 Note: The solution set must not contain duplicate subsets.

 For example,
 If nums = [1,2,2], a solution is:

 [
 [2],
 [1],
 [1,2,2],
 [2,2],
 [1,2],
 []
 ]

 */
public class SubsetsII {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        // sort array so duplicates will be next to each other
        Arrays.sort(nums);

        helper(result, new ArrayList<>(), nums, 0);

        return result;
    }

    private void helper(List<List<Integer>> result,
                        List<Integer> curList,
                        int[] nums,
                        int startIndex) {
        result.add(new ArrayList<>(curList));

        for (int i = startIndex; i < nums.length; i++) {
            // skip duplicates
            if (i > startIndex && nums[i] == nums[i - 1]) {
                continue;
            }

            // backtracking
            curList.add(nums[i]);
            helper(result, curList, nums, i + 1);
            curList.remove(curList.size() - 1);
        }
    }
}
