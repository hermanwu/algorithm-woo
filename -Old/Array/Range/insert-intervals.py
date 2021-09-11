'''
Description
Given a non-overlapping interval list which is sorted by start point.

Insert a new interval into it, make sure the list is still in order and non-overlapping (merge intervals if necessary).

Have you met this question in a real interview?  
Example
Insert (2, 5) into [(1,2), (5,9)], we get [(1,9)].

Insert (3, 4) into [(1,2), (5,9)], we get [(1,2), (3,4), (5,9)].


'''

class Solution(object):
    def insert(self, intervals, newInterval):
        l, r, s, e = [], [], newInterval.start, newInterval.end
        for i in intervals:
            if i.end < s:
                l += i,
            elif i.start > e:
                r += i,
            else:
                s = min(s, i.start)
                e = max(e, i.end)
        return l + [Interval(s, e)] + r

class Solution:
    """
    @param intervals: Sorted interval list.
    @param newInterval: new interval.
    @return: A new interval list.
    """
    def insert(self, intervals, newInterval):
        # write your code here
        if not newInterval:
            print('test')
            return intervals
        
        if not intervals:
            print('test2')
            return [newInterval]
            
        i = 0
        
        while i < len(intervals):
            if newInterval.end < intervals[i].start:
                intervals.insert(i, newInterval)
                return intervals
                
            if newInterval.start > intervals[i].end:
                i += 1
                continue
            
            newInterval = self.merge(newInterval, intervals[i])
            print(newInterval.start)
            print(newInterval.end)
            intervals.pop(i)
        
        intervals.append(newInterval)
        return intervals
            
    def merge(self, newInterval, oldInterval):
        return Interval(min(newInterval.start, oldInterval.start), max(newInterval.end, oldInterval.end))