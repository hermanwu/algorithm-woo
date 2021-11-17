/**
Leetcode 1416: restore the array

A program was supposed to print an array of integers. The program forgot to print the whitespace. All we know is that all integers in
the array were in the range [1, k] and there are no leading zeros in
the array.


 */

/** start from the end to avoid stack overflow. */
const restoreTheArray = (s, k) => {
  const n = s.length;

  // include one extra value at the end of the array.
  const dp = new Array(n + 1).fill(0);

  dp[n] = 1;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') {
      continue;
    }

    let num = 0;
    for (let j = i + 1; j <= n; j++) {
      num = num * 10 + (s[j - 1] - '0');
      if (num > k) {
        break;
      }
      dp[i] = dp[i] + dp[j];
    }
  }

  return dp[0];
};

const test1 = () => {
  const s = '1000';
  const k = 1000;

  return restoreTheArray(s, k) === 1;
};

const test2 = () => {
  const s = '1000';
  const k = 10;

  return restoreTheArray(s, k) === 0;
};

const test3 = () => {
  const s = '1317';
  const k = 2000;

  return restoreTheArray(s, k) === 8;
};

const test4 = () => {
  const s = '1317';
  const k = 2000;

  return restoreTheArray(s, k) === 8;
};

const test5 = () => {
  const s = '2020';
  const k = 30;

  return restoreTheArray(s, k) === 1;
};

const test6 = () => {
  const s = '1234567890';
  const k = 90;

  return restoreTheArray(s, k) === 34;
};

console.log(test1());
console.log(test2());
console.log(test3());
console.log(test4());
console.log(test5());
console.log(test6());
