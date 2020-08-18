/**
 * @param A: an integer sorted array
 * @param target: an integer to be inserted
 * @return: An integer
 */
const searchInsert = function (A, target) {
  if (!A || A.length === 0) {
    return 0;
  }

  let left = 0;
  let right = A.length - 1;

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (A[mid] === target) {
      return mid;
    } else if (A[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (A[left] >= target) {
    return left;
  } else if (A[right] >= target) {
    return right;
  } else {
    return right + 1;
  }
};
