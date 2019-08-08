/**
 * @param numbers: Give an array numbers of n integer
 * @param target: An integer
 * @return: return the sum of the three integers, the sum closest target.
 */

const threeSumClosest = function(numbers, target) {
  numbers.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  let ans = numbers[0] + numbers[1] + numbers[2];

  for (let i = 0; i < numbers.length - 2; i++) {
    let j = i + 1;
    let k = numbers.length - 1;

    while (j < k) {
      let result = numbers[i] + numbers[j] + numbers[k];

      if (result === target) {
        return result;
      }

      if (result > target) {
        if (result - target < min) {
          min = result - target;
          ans = result;
        }
        k -= 1;
      } else {
        if (target - result < min) {
          min = target - result;
          ans = result;
        }
        j += 1;
      }
    }
  }

  return ans;
};
