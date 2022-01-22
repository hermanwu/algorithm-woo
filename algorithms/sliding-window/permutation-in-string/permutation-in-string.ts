/**
https://leetcode.com/problems/permutation-in-string/
567. Permutation in String

 */
function checkInclusion(s1: string, s2: string): boolean {
  let len1 = s1.length;
  let len2 = s2.length;
  if (len1 > len2) {
    return false;
  }

  let counts = new Array(26).fill(0);

  for (let i = 0; i < len1; i++) {
    // console.log(s1.charCodeAt(i))
    counts[s1.charCodeAt(i) - 97] += 1;
  }

  for (let i = 0; i < len2; i++) {
    counts[s2.charCodeAt(i) - 97] -= 1;

    if (i - len1 >= 0) {
      counts[s2.charCodeAt(i - len1) - 97] += 1;
    }

    if (allZeros(counts)) {
      return true;
    }
  }

  return false;

  function allZeros(arr: number[]) {
    for (let num of arr) {
      if (num !== 0) {
        return false;
      }
    }
    return true;
  }
}
