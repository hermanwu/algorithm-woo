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

        // create a comparator
        Comparator<Interval> comparatorStart = new Comparator<Interval>() {
            @Override
            public int compare(Interval a, Interval b) {
                return a.start - b.start;
            }
        };

        Comparator<Interval> comparatorEnd = new Comparator<Interval>() {
            @Override
            public int compare(Interval a, Interval b) {
                return a.end - b.end;
            }
        };

        Arrays.sort(intervals, comparatorStart);

        PriorityQueue<Interval> q = new PriorityQueue<Interval>(intervals.length, comparatorEnd);

        q.offer(intervals[0]);

        for (int i = 0; i < intervals.length; i++) {
            q.add(intervals[i]);
        }

        return q.size();
    }

    public class Interval {
        int start;
        int end;
        Interval() { start = 0; end = 0; }
        Interval(int s, int e) { start = s; end = e; }
    }
}
