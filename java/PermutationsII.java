import java.util.*;

/**

 Given a collection of numbers that might contain duplicates, return all possible unique permutations.

 For example,
 [1,1,2] have the following unique permutations:
 [
 [1,1,2],
 [1,2,1],
 [2,1,1]
 ]

 */

public class PermutationsII {
    public List<List<Integer>> permuteUnique(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        Arrays.sort(nums);
        int[] visited = new int[nums.length];


        helper(result, new ArrayList<Integer>(), nums, visited);


        return result;
    }

    public void helper(List<List<Integer>> result, List<Integer> cur, int[] nums, int[] visited) {

        if (cur.size() == nums.length) {

            result.add(new ArrayList<>(cur));

            return;
        }

        for (int i = 0; i < nums.length; i++) {

            if (visited[i] == 1 || i > 0 && nums[i] == nums[i - 1] && visited[i - 1] == 0) {
                continue;
            }

            cur.add(nums[i]);
            visited[i] = 1;

            helper(result, cur, nums, visited);

            cur.remove(cur.size() - 1);
            visited[i] = 0;
        }
    }
}



