import java.util.*;

public class TopKFrequentElements {
    private class freqCount {
        int value;
        int count;

        public freqCount(int value, int count) {
            this.value = value;
            this.count = count;
        }
    }

    private class freqComparator implements Comparator<freqCount> {
        @Override
        public int compare(freqCount a, freqCount b) {
            return b.count - a.count;
        }
    }

    public List<Integer> topKFrequent(int[] nums, int k) {
        List<Integer> result = new ArrayList<Integer>();
        if (nums == null || nums.length == 0 || k <= 0) {
            return result;
        }

        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int n : nums) {
            map.put(n, map.getOrDefault(n, 0) + 1);
        }

        PriorityQueue<freqCount> queue = new PriorityQueue<freqCount>(nums.length, new freqComparator());

        for (int key : map.keySet()) {
            queue.add(new freqCount(key, map.get(key)));
        }

        while(result.size() < k) {
            freqCount top = queue.poll();
            result.add(top.value);
        }

        return result;
    }
}
