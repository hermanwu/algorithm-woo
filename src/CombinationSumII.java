import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 Given a set of candidate numbers (C) (without duplicates) and a target number (T),
 find all unique combinations in C where the candidate numbers sums to T.

 The same repeated number may be chosen from C unlimited number of times.

 Note:
 All numbers (including target) will be positive integers.
 The solution set must not contain duplicate combinations.
 For example, given candidate set [2, 3, 6, 7] and target 7,
 A solution set is:

 */
public class CombinationSumII {
    public static void main(String[] args) {
        int[] candidates = new int[]{ 10, 1, 2, 7, 6, 1, 5 };

        CombinationSumII c = new CombinationSumII();

        List<List<Integer>> results = c.combinationSum2(candidates, 8);

        for (List<Integer> list : results) {
            Printer.printIntegerList(list);
        }
    }

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> results = new ArrayList<>();

        Arrays.sort(candidates);

        helper(results, new ArrayList<Integer>(), candidates, target, 0);

        return results;
    }

    public void helper(List<List<Integer>> results,
                       List<Integer> current,
                       int[] candidates,
                       int target,
                       int index) {

        if (target < 0) {
            return;
        }

        if (target == 0) {
            results.add(current);
            return;
        }

        for (int i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] == candidates[i - 1]) {
                continue;
            }

            current.add(candidates[i]);

            helper(results,
                    new ArrayList<Integer>(current),
                    candidates,
                    target - candidates[i],
                    i + 1);

            current.remove(current.size() - 1);
        }
    }
}
