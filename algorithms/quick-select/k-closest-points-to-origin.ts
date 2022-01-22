// https://leetcode.com/problems/k-closest-points-to-origin/submissions/
function kClosest(points: number[][], k: number): number[][] {
  const calLen = (point) => {
    return Math.pow(point[0], 2) + Math.pow(point[1], 2);
  };

  const quickSelect = (left, right, k): number => {
    const pivot = right;
    const pivotLen = calLen(points[pivot]);
    let cur = left;

    for (let i = left; i < right; i++) {
      if (calLen(points[i]) < pivotLen) {
        [points[cur], points[i]] = [points[i], points[cur]];
        cur += 1;
      }
    }

    [points[cur], points[pivot]] = [points[pivot], points[cur]];

    if (k === cur) {
      return cur;
    }

    if (k > cur) {
      return quickSelect(cur + 1, right, k);
    }

    if (k < cur) {
      return quickSelect(left, cur - 1, k);
    }
  };

  const index = quickSelect(0, points.length - 1, k - 1);
  return points.slice(0, index + 1);
}
