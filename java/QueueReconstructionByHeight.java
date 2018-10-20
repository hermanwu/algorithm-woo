import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**

 Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

 Note:
 The number of people is less than 1,100.

 */
public class QueueReconstructionByHeight {
    public int[][] reconstructQueue(int[][] people) {
        Arrays.sort(people, (a, b) -> a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);

        List<int[]> list = new LinkedList<>();

        for (int[] person : people) {
            list.add(person[1], person);
        }

        return list.toArray(new int[list.size()][2]);
    }
}
