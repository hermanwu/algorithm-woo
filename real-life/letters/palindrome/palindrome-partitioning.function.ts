// What is the big O?
// 2 ^ n

function partition(s: string): string[][] {
  const len = s.length;
  const map = new Map();

  const result = [];

  function isPalindrome(s, start, end) {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      } else {
        start += 1;
        end -= 1;
      }
    }
    return true;
  }

  function dfs(result, current, start) {
    if (start >= len) {
      result.push([...current]);
      return;
    }

    for (let end = start; end < len; end++) {
      if (isPalindrome(s, start, end)) {
        current.push(s.substring(start, end + 1));
        dfs(result, current, end + 1);
        current.pop();
      }
    }
  }

  dfs(result, [], 0);
  return result;
}
