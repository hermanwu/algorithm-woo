/**
 * @param numbers: An array of Integer
 * @param target: target = numbers[index1] + numbers[index2]
 * @return: [index1 + 1, index2 + 1] (index1 < index2)
 */
const twoSumWithMap = function (numbers, target) {
  // write your code here
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    const key = target - numbers[i];

    // Make sure to compare with undefined because index could be 0, which is evaluated to false.
    if (map[key] !== undefined) {
      return [map[target - numbers[i]], i];
    }

    map[numbers[i]] = i;
  }
};

const twoSumWithTwoPointer = function (nums, target) {
  if (!nums || nums.length === 0) {
    return [0, 0];
  }
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] + nums[end] > target) {
      end--;
    }
    if (nums[end] + nums[start] < target) {
      start++;
    }
    if (nums[end] + nums[start] === target) {
      break;
    }
  }

  if (start === end) {
    return [0, 0];
  } else {
    return [start + 1, end + 1];
  }
};
