/**
https://leetcode.com/problems/minimum-window-substring/submissions/

76. Minimum Window Substring
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.



Key:
Track character appearance count;
Track valid substring (using count;)
 */
function minWindow(s: string, t: string): string {
  const map = new Map();
  let result;
  // Count equal to zero represents it is a valid string.
  let count = 0;

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i]) === false) {
      map.set(t[i], 0);
    }

    map.set(t[i], map.get(t[i]) + 1);
    count += 1;
  }

  let begin = 0;
  let end = 0;
  let head = 0;
  let distance = Number.MAX_SAFE_INTEGER;

  while (end < s.length) {
    if (map.has(s[end])) {
      // Only decrease count when there is a character needs to be removed.
      if (map.get(s[end]) > 0) {
        count -= 1;
      }

      map.set(s[end], map.get(s[end]) - 1);
    }

    while (count === 0) {
      if (end - begin + 1 < distance) {
        distance = end - begin + 1;
        head = begin;
      }

      if (map.has(s[begin])) {
        // Only increase count when we need the characters.
        if (map.get(s[begin]) === 0) {
          count += 1;
        }
        map.set(s[begin], map.get(s[begin]) + 1);
      }
      begin += 1;
    }

    end += 1;
  }

  // console.log(begin);
  // console.log(distance);
  // console.log(result === undefined)
  return distance === Number.MAX_SAFE_INTEGER
    ? ""
    : s.substring(head, head + distance);
}

// console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
// console.log(minWindow("a", "a")); // "a"
// console.log(minWindow("a", "aa")); // "a"
