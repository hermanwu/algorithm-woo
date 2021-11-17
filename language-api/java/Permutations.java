import java.util.ArrayList;
import java.util.List;

/**
 Given a collection of distinct numbers, return all possible permutations.

 For example,
 [1,2,3] have the following permutations:
 [
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
 ]
 */

public class Permutations {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        helper(result, new ArrayList<>(), nums);

        return result;
    }


    private void helper(List<List<Integer>> results,
                        List<Integer> curList,
                        int[] nums) {
        if (curList.size() == nums.length) {
            results.add(new ArrayList<>(curList));
        } else {
            for (int num : nums) {
                if (curList.contains(num)) {
                    continue;
                } else {
                    curList.add(num);
                    helper(results, curList, nums);
                    curList.remove(curList.size() - 1);
                }
            }
        }
    }
}
