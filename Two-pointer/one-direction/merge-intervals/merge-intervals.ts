function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

  let prev = intervals[0];

  const result = [prev];

  for (const cur of intervals) {
    if (cur[0] < prev[1]) {
      prev[1] = Math.max(cur[1], prev[1]);
    } else {
      result.push(cur);
      prev = cur;
    }
  }
  return result;
}
