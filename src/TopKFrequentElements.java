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

    public List<Integer> topKFrequentII(int[] nums, int k) {
        List<Integer> result = new ArrayList<Integer>();
        if (nums == null || nums.length == 0 || k <= 0) {
            return result;
        }

        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int n : nums) {
            map.put(n, map.getOrDefault(n, 0) + 1);
        }

        PriorityQueue<freqCount> queue = new PriorityQueue<>((a, b) -> (b.count - a.count));

        for (int key : map.keySet()) {
            queue.add(new freqCount(key, map.get(key)));
        }

        while(result.size() < k) {
            freqCount top = queue.poll();
            result.add(top.value);
        }

        return result;
    }

    public List<Integer> topKFrequent(int[] nums, int k) {
        List<Integer> result = new ArrayList<>();
        // buckets[x] represents the numbers that appeared x times
        List<Integer>[] buckets = new List[nums.length + 1];
        // <key : value> => <number : fequency>
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int n : nums) {
            // count appearence and record it into the frequency map
            frequencyMap.put(n, frequencyMap.getOrDefault(n, 0) + 1);
        }

        // iterate through map and add number to its corresponding bucket
        for (int key : frequencyMap.keySet()) {
            int frequence = frequencyMap.get(key);
            if (buckets[frequence] == null) {
                buckets[frequence] = new ArrayList<>();
            }
            buckets[frequence].add(key);
        }

        // add number to back to list
        for (int pos = buckets.length - 1; pos >= 0 && result.size() < k; pos--) {
            if (buckets[pos] != null) {
                result.addAll(buckets[pos]);
            }
        }

        return result;
    }
}
