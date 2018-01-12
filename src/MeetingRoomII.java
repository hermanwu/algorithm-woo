import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

/**
 Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

 For example,
 Given [[0, 30],[5, 10],[15, 20]],
 return 2.
 */

public class MeetingRoomII {
    public static void main(String[] args) {

    }

    public int minMeetingRooms(Interval[] intervals) {
        if (intervals == null || intervals.length == 0) {
            return 0;
        }

        // create a comparator
        Interval[] temp = intervals.clone();

        Arrays.sort(temp, (a, b) -> (a.start - b.start));
        PriorityQueue<Interval> queue = new PriorityQueue<>((a, b) -> (a.end - b.end));

        int max = 0, n = intervals.length, i;

        for (i = 0; i < n; i++) {
            while (!queue.isEmpty() && queue.peek().end <= intervals[i].start) {
                queue.poll();
            }
            queue.offer(intervals[i]);
            max = Math.max(max, queue.size());
        }

        return max;
    }

    public class Interval {
        int start;
        int end;
        Interval() { start = 0; end = 0; }
        Interval(int s, int e) { start = s; end = e; }
    }
}
