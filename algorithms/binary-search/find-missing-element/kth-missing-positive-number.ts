/**
 * 1539. Kth Missing Positive Number
 */
function findKthPositive(arr: number[], k: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] - mid - 1 < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left + k;
}
