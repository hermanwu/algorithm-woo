import java.util.ArrayList;
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
public class CombinationSum {
    public static void main(String[] args) {
        int[] candidates = new int[]{ 2, 3, 6, 7 };

        CombinationSum c = new CombinationSum();

        List<List<Integer>> results = c.combinationSum(candidates, 7);

        for (List<Integer> list : results) {
            Printer.printIntegerList(list);
        }
    }

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> results = new ArrayList<>();

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
            current.add(candidates[i]);

            helper(results,
                    new ArrayList<Integer>(current),
                    candidates,
                    target - candidates[i],
                    i);

            current.remove(current.size() - 1);
        }
    }

}
