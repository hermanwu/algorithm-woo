/**
 * Leetcode: https://leetcode.com/problems/minimum-absolute-difference/
 *
 * Given an array of distinct integers arr, find all pairs of elements with
 * the minimum absolute difference of any two elements.
 *
 * Return a list of pairs in ascending order(with respect to pairs), each
 * pair [a, b] follows
 *   - a, b are from arr
 *   - a < b
 *   - b - a equals to the minimum absolute difference of any two elements in arr
 *
 * Constraints:
 *   - 2 <= arr.length <= 10^5
 *   - -10^6 <= arr[i] <= 10^6
 */
function minimumAbsDifference(arr: number[]): number[][] {
  // strategy 1
  // sort array.
  // compare every two adjacent number, store the difference as key and pair as value in a map.
  // track the minimum difference.

  // strategy 2
  console.log(100000);

  const OFFSET = 30;
  const nums = new Array(OFFSET * 2).fill(null);
  let minDifference = OFFSET * 2;
  let result: number[][] = [];

  let start = 0,
    end = 1;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    num += OFFSET;
    nums[num] = true;
  }
  console.log(nums);

  while (nums[start] === null && start < nums.length) {
    start += 1;
  }
  end = start + 1;

  while (end < nums.length) {
    if (nums[end] === null) {
      end += 1;
    } else {
      const diff = end - start;

      if (diff === minDifference) {
        result.push([start - OFFSET, end - OFFSET]);
      } else if (diff < minDifference) {
        minDifference = diff;
        result = [[start - OFFSET, end - OFFSET]];
      }

      start = end;
      end += 1;
    }
  }

  return result;
}

console.log(minimumAbsDifference([1, 3, 6, 10, 15])); // [[1, 3]]
// console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); // [[-14,-10],[19,23],[23,27]]
