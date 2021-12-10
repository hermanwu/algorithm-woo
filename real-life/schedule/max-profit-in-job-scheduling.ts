//https://leetcode.com/problems/maximum-profit-in-job-scheduling/
function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  // sort the jobs.
  const jobs = [];

  for (let i = 0; i < startTime.length; i++) {
    jobs.push([startTime[i], endTime[i], profit[i]]);
  }
  jobs.sort((a, b) => a[0] - b[0]);
  let max = 0;
  let mem = {};
  dfs(0, 1);
  // dfs search.

  function dfs(curIndex: number, currentTime: number) {
    if (curIndex >= jobs.length) {
      return 0;
    }

    if (mem[currentTime]) {
      return mem[currentTime];
    }

    while (curIndex < jobs.length && jobs[curIndex][0] < currentTime) {
      curIndex += 1;
    }

    let local = 0;
    if (curIndex < jobs.length) {
      // Take the current job.
      local = jobs[curIndex][2] + dfs(curIndex + 1, jobs[curIndex][1]);

      // Skip the current job.
      local = Math.max(local, dfs(curIndex + 1, currentTime));
      mem[currentTime] = local;
    }

    max = Math.max(local, max);

    return local;
  }

  // memorization.
  return max;
}
