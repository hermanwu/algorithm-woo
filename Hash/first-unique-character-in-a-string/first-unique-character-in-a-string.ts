/**
 * @param str: str: the given string
 * @return: char: the first unique character in a given string
 */
const firstUniqChar = function (str) {
  // Write your code here
  if (!str) {
    return -1;
  }

  const map = {};

  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] = map[arr[i]] + 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 1) {
      return arr[i];
    }
  }
};

// use set

/**
 * @param str: str: the given string
 * @return: char: the first unique character in a given string
 */
const firstUniqChar2 = function (s) {
  const due = new Set();
  const queue = new Set();
  for (const n of s) {
    if (queue.has(n)) {
      queue.delete(n);
      due.add(n);
    } else if (!due.has(n)) {
      queue.add(n);
    }
  }

  return Array.from(queue)[0] || " ";
};

// use index of

/**
 * @param str: str: the given string
 * @return: char: the first unique character in a given string
 */
const firstUniqChar3 = function (str) {
  // Write your code here
  let len = str.length;
  let val;
  for (let i = 0; i < len; i++) {
    let start = str.indexOf(str[i]);
    let end = str.lastIndexOf(str[i]);
    if (start === end) {
      if (!val) {
        val = str[i];
      }
    }
  }
  return val;
};
