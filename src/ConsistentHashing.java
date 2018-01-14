import java.util.ArrayList;
import java.util.List;

/**

 Notes
 Testcase
 Judge
 一般的数据库进行horizontal shard的方法是指，把 id 对 数据库服务器总数 n 取模，然后来得到他在哪台机器上。这种方法的缺点是，当数据继续增加，我们需要增加数据库服务器，将 n 变为 n+1 时，几乎所有的数据都要移动，这就造成了不 consistent。为了减少这种 naive 的 hash方法(%n) 带来的缺陷，出现了一种新的hash算法：一致性哈希的算法——Consistent Hashing。这种算法有很多种实现方式，这里我们来实现一种简单的 Consistent Hashing。

 将 id 对 360 取模，假如一开始有3台机器，那么让3台机器分别负责0~119, 120~239, 240~359 的三个部分。那么模出来是多少，查一下在哪个区间，就去哪台机器。
 当机器从 n 台变为 n+1 台了以后，我们从n个区间中，找到最大的一个区间，然后一分为二，把一半给第n+1台机器。
 比如从3台变4台的时候，我们找到了第3个区间0~119是当前最大的一个区间，那么我们把0~119分为0~59和60~119两个部分。0~59仍然给第1台机器，60~119给第4台机器。
 然后接着从4台变5台，我们找到最大的区间是第3个区间120~239，一分为二之后，变为 120~179, 180~239。
 假设一开始所有的数据都在一台机器上，请问加到第 n 台机器的时候，区间的分布情况和对应的机器编号分别是多少？

 Notice

 你可以假设 n <= 360. 同时我们约定，当最大区间出现多个时，我们拆分编号较小的那台机器。
 比如0~119， 120~239区间的大小都是120，但是前一台机器的编号是1，后一台机器的编号是2, 所以我们拆分0~119这个区间。


 */
public class ConsistentHashing {
    public List<List<Integer>> consistentHashing(int n) {
        // write your code here

        List<List<Integer>> results = new ArrayList<>();

        List<Integer> machine = new ArrayList<>();

        machine.add(0);
        machine.add(359);
        machine.add(1);

        results.add(machine);

        for (int i = 1; i < n; i++) {
            machine = new ArrayList<Integer>();

            int index = 0;

            // Find one machine with largest interval.
            for (int j = 0; j < i; j++) {
                if (results.get(j).get(1) - results.get(j).get(0) + 1 >
                        results.get(index).get(1) - results.get(index).get(0) + 1) {
                    index = j;
                }
            }

            // Divide existing dataset into two.
            int left = results.get(index).get(0);
            int right = results.get(index).get(1);

            results.get(index).set(1, (left + right) / 2);

            machine.add((left + right) / 2 + 1);
            machine.add(right);
            machine.add(i + 1);

            results.add(machine);
        }

        return results;
    }
}
