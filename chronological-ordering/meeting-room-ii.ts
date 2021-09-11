/**
Given an array of meeting time intervals intervals where intervals[i] = 
[starti, endi], return the minimum number of conference rooms required.

Leetcode: https://leetcode.com/problems/meeting-rooms-ii/

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1

Constraints:

1 <= intervals.length <= 104
0 <= starti < endi <= 106
*/
function minMeetingRooms(intervals: number[][]): number {
  const start = [];
  const end = [];

  for (let interval of intervals) {
    start.push(interval[0]);
    end.push(interval[1]);
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let rooms = 0;
  let endIndex = 0;

  for (let i = 0; i < start.length; i++) {
    // whenever there is a start meeting, we need to add one room.
    //  But before adding rooms, we check to see if any previous meeting ends,
    //  which is why we check start with the first end. When the start is bigger
    //  than end, it means at this time one of the previous meeting ends,
    //  and it can take and reuse that room.
    rooms += 1;
    if (start[i] >= end[endIndex]) {
      rooms -= 1;
      endIndex += 1;
    }
  }
  return rooms;
}
