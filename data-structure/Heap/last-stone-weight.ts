/**
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 *
 * We are playing a game with the stones. On each turn, we choose the heaviest two stones
 * and smash them together. Suppose the heaviest two stones have weights x and y with x <= y.
 * The result of this smash is:
 *  - If x == y, both stones are destroyed, and
 *  - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 *
 * At the end of the game, there is at most one stone left.
 * Return the smallest possible weight of the left stone. If there are no stones left, return 0.
 */
function lastStoneWeight(stones: number[]): number {
  // sort array // nlogn
  stones.sort((a, b) => a - b);

  // while length > 1 n

  // pop the biggest two elements O(1)
  // smash them  O(1)
  // add back to the array. log(n)     lastStoneWeight

  while (stones.length > 1) {
    const one = stones.pop();
    const two = stones.pop();

    const newStone = Math.abs(one - two);

    if (newStone > 0) {
      stones.push(newStone);
      stones.sort();
    }
  }

  if (stones.length > 0) {
    return stones[0];
  }
  return 0;
}

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); //  1
// console.log(lastStoneWeight([1])); // 1
