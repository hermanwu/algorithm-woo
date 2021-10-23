/**
 * Leetcode: https://leetcode.com/problems/smallest-string-with-swaps/
 *
 * You are given a string s, and an array of pairs of indices
 * in the string pairs where pairs[i] = [a, b] indicates 2
 * indices(0-indexed) of the string.
 *
 * You can swap the characters at any pair of indices in the
 * given pairs any number of times.
 *
 * Return the lexicographically smallest string that s can be
 * changed to after using the swaps.
 *
 * Constraints:
 *   - 1 <= s.length <= 10^5
 *   - 0 <= pairs.length <= 10^5
 *   - 0 <= pairs[i][0], pairs[i][1] < s.length
 *   - s only contains lower case English letters.
 */
function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  // 0 -> c
  // 1 -> b
  // 2 -> a
  const result = new Array(s.length).fill(null);

  // Find all the connected component.
  const visited = new Set();
  const adjList = new Map();

  for (let i = 0; i < s.length; i++) {
    adjList.set(i, new Set());
  }

  for (let pair of pairs) {
    adjList.get(pair[0]).add(pair[1]);
    adjList.get(pair[1]).add(pair[0]);
  }

  function dfs(connectedNodes, currentNode) {
    connectedNodes.push(currentNode);
    visited.add(currentNode);

    const neighbours = adjList.get(currentNode);
    for (let node of neighbours) {
      if (visited.has(node) === false) {
        dfs(connectedNodes, node);
      }
    }
  }

  const connectedComponents = [];

  for (let i = 0; i < s.length; i++) {
    if (visited.has(i) === false) {
      const connectedNodes = [];
      dfs(connectedNodes, i);
      connectedComponents.push(connectedNodes);
    }
  }

  // For each component, get all the character, sort them, add them back to string.
  for (let component of connectedComponents) {
    const charArray = [];
    const indexArray = [];
    for (let node of component) {
      charArray.push(s[node]);
      indexArray.push(node);
    }

    charArray.sort();
    indexArray.sort((a, b) => a - b);

    for (let i = 0; i < charArray.length; i++) {
      result[indexArray[i]] = charArray[i];
    }
  }

  return result.join("");
}

// console.log(
//   smallestStringWithSwaps("dcab", [
//     [0, 3],
//     [1, 2],
//   ])
// ); // bacd

// console.log(
//   smallestStringWithSwaps("dcab", [
//     [0, 3],
//     [1, 2],
//     [0, 2],
//   ])
// ); // abcd

// console.log(
//   smallestStringWithSwaps("cba", [
//     [0, 1],
//     [1, 2],
//   ])
// ); // abc
