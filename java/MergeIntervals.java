import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

/**
 Given a collection of intervals, merge all overlapping intervals.

 For example,
 Given [1,3],[2,6],[8,10],[15,18],
 return [1,6],[8,10],[15,18].

 */
public class MergeIntervals {
    public List<Interval> merge(List<Interval> intervals) {
        List<Interval> result = new ArrayList<>();

        if (intervals.size() == 0) {
            return result;
        }

        PriorityQueue<Interval> queue =
                new PriorityQueue<>((a, b) -> a.start - b.start);

        for (Interval i : intervals) {
            queue.add(i);
        }

        Interval temp = new Interval(queue.peek().start, queue.peek().end);
        queue.poll();

        while (!queue.isEmpty()) {
            Interval cur = queue.poll();
            if (cur.start > temp.end) {
                result.add(new Interval(temp.start, temp.end));
                temp.start = cur.start;
                temp.end = cur.end;
            } else {
                temp.end = Math.max(cur.end, temp.end);
            }
        }

        result.add(new Interval(temp.start, temp.end));

        return result;
    }

    public class Interval {
        int start;
        int end;
        Interval() { start = 0; end = 0; }
        Interval(int s, int e) { start = s; end = e; }
    }
}
