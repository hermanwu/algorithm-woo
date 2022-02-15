/**
316. Remove Duplicate Letters
Medium

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 */
function removeDuplicateLetters(s: string): string {
  const count = new Array(26).fill(0);
  const visited = new Array(26).fill(false);
  // Store characters;
  const st = [];
  const aCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - aCode;
    count[index] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) - aCode;
    count[index] -= 1;

    if (visited[index]) {
      continue;
    }

    while (
      st.length > 0 &&
      index < st[0].charCodeAt(0) - aCode &&
      count[st[0].charCodeAt(0) - aCode] != 0
    ) {
      visited[st[0].charCodeAt(0) - aCode] = false;
      st.shift();
    }
    st.unshift(s[i]);
    visited[s.charCodeAt(i) - aCode] = true;
  }

  return st.reverse().join('');
}
