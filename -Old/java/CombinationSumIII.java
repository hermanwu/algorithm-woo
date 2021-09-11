import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 Find all possible combinations of k numbers that add up to a number n,
 given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


 Example 1:

 Input: k = 3, n = 7

 Output:

 [[1,2,4]]

 Example 2:

 Input: k = 3, n = 9

 Output:

 [[1,2,6], [1,3,5], [2,3,4]]
 */

public class CombinationSumIII {
    public static void main(String[] args) {

        CombinationSumIII c = new CombinationSumIII();

        List<List<Integer>> results = c.combinationSum3(3, 9);

        for (List<Integer> list : results) {
            Printer.printIntegerList(list);
        }
    }

    public List<List<Integer>> combinationSum3(int k, int n) {
        List<List<Integer>> results = new ArrayList<>();

        helper(results, new ArrayList<Integer>(), k, n, 1);

        return results;
    }

    public void helper(List<List<Integer>> results,
                       List<Integer> current,
                       int k,
                       int n,
                       int index) {

        if (current.size() > k) {
            return;
        }

        if (current.size() == k && n == 0) {
            results.add(new ArrayList<>(current));
            return;
        }

        for (int i = index; i <= 9; i++) {
            current.add(i);

            helper(results,
                    current,
                    k,
                    n - i,
                    i + 1);

            current.remove(current.size() - 1);
        }
    }
}
