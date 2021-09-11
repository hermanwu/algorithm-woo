function twoSum(nums: number[], target: number): number[] {
  if (!Array.isArray(nums) || nums.length === 1) {
    throw new TypeError("input nums is not valid");
  }

  const map = new Map();

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i];
    const numberToLookFor = target - num;
    if (map.has(numberToLookFor)) {
      return [map.get(numberToLookFor), i];
    } else {
      map.set(nums[i], i);
    }
  }
}

// [1 2 3]  3

function twoSum2(nums: number[], target: number): number[] {
  nums.sort(); // nlonn

  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    console.log("start" + start + "end" + end);

    if (nums[start] + nums[end] === target) {
      return [start, end];
    }

    if (nums[start] + nums[end] > target) {
      end -= 1;
    } else {
      start += 1;
    }
  }
}

const result = twoSum2([1, 2, 3, 5, 9, 10], 14);
console.log(result);
