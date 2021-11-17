/**
 * @param A: an integer array
 * @return:
 */
const sortIntegers2 = function (A) {
  quickSort(A, 0, A.length - 1);
};

const quickSort = function (arr, start, end) {
  if (start >= end) {
    return;
  }

  const pivot = arr[start];

  let left = start;
  let right = end;

  while (left <= right) {
    while (arr[left] < pivot && left <= right) {
      left += 1;
    }

    while (arr[right] > pivot && left <= right) {
      right -= 1;
    }

    if (left <= right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left += 1;
      right -= 1;
    }
  }

  console.log(left);
  console.log(right);
  quickSort(arr, left, end);
  quickSort(arr, start, right);
};
