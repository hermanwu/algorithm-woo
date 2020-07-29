/**
 * @param numbers: An array of Integer
 * @param target: target = numbers[index1] + numbers[index2]
 * @return: [index1 + 1, index2 + 1] (index1 < index2)
 */
const twoSum = function (numbers, target) {
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
