/**
 * You are given an array of variable pairs equations and an array of
 * real numbers values, where equations[i] = [Ai, Bi] and values[i]
 * represent the equation Ai / Bi = values[i]. Each Ai or Bi is a
 * string that represents a single variable.
 *
 * You are also given some queries, where queries[j] = [Cj, Dj]
 * represents the jth query where you must find the answer for
 * Cj / Dj = ?.
 *
 * Return the answers to all queries. If a single answer cannot be
 * determined, return -1.0.
 *
 * Note: The input is always valid. You may assume that evaluating
 * the queries will not result in division by zero and that there is
 * no contradiction.
 *
 * Leetcode: https://leetcode.com/problems/evaluate-division/
 */
function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const adjList = new Map<string, Map<string, number>>();

  for (let i = 0; i < equations.length; i++) {
    const num1 = equations[i][0];
    const num2 = equations[i][1];
    if (adjList.has(num1) === false) {
      adjList.set(num1, new Map());
    }
    if (adjList.has(num2) === false) {
      adjList.set(num2, new Map());
    }

    adjList.get(num1).set(num2, values[i]);
    adjList.get(num2).set(num1, 1 / values[i]);
  }

  const result = [];

  for (let query of queries) {
    const var1 = query[0];
    const var2 = query[1];
    if (adjList.has(var1) === false || adjList.has(var2) === false) {
      result.push[-1];
    } else if (var1 === var2) {
      result.push[1];
    } else {
      const seen = new Set();
      return dfs(seen);
    }
  }

  function dfs(
    seen: Set<string>,
    curNode: string,
    currentTotal: number,
    target
  ) {}

  return result;
}

// console.log(
//   calcEquation(
//     [
//       ['a', 'b'],
//       ['b', 'c'],
//     ],
//     [2.0, 3.0],
//     [
//       ['a', 'c'],
//       ['b', 'a'],
//       ['a', 'e'],
//       ['a', 'a'],
//       ['x', 'x'],
//     ]
//   )
// ); // [6.0, 0.5, -1.0, 1.0, -1.0 ]

// console.log(
//   calcEquation(
//     [
//       ['a', 'b'],
//       ['b', 'c'],
//       ['bc', 'cd'],
//     ],
//     [1.5, 2.5, 5.0],
//     [
//       ['a', 'c'],
//       ['c', 'b'],
//       ['bc', 'cd'],
//       ['cd', 'bc'],
//     ]
//   )
// ); // [3.75, 0.4, 5.0, 0.2]

// console.log(
//   calcEquation(
//     [['a', 'b']],
//     [0.5],
//     [
//       ['a', 'b'],
//       ['b', 'a'],
//       ['a', 'c'],
//       ['x', 'y'],
//     ]
//   )
// ); // [(0.5, 2.0, -1.0, -1.0)];
