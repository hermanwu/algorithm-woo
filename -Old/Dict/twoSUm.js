/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let remain = target - val;
    if (map[remain] > -1) {
      return [map[remain], i];
    }

    map[val] = i;
  }

  return [-1, -1];
};
