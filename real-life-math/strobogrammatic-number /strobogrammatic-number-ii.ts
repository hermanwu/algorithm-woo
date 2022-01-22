// https://leetcode.com/problems/strobogrammatic-number-ii/

function findStrobogrammatic(n: number): string[] {
  const solutions = [];

  function dfs(n: number, left: string, right: string): void {
    if (n === 1) {
      solutions.push(left + "8" + right);
      solutions.push(left + "1" + right);
      if (left.length > 0) {
        solutions.push(left + "0" + right);
      }

      return;
    }

    if (n === 2) {
      solutions.push(left + "88" + right);
      solutions.push(left + "11" + right);
      solutions.push(left + "69" + right);
      solutions.push(left + "96" + right);
      if (left.length > 0) {
        solutions.push(left + "00" + right);
      }
      return;
    }

    dfs(n - 2, left + "1", "1" + right);
    dfs(n - 2, left + "8", "8" + right);
    dfs(n - 2, left + "6", "9" + right);
    dfs(n - 2, left + "9", "6" + right);
    if (left.length > 0) {
      dfs(n - 2, left + "0", "0" + right);
    }
  }

  dfs(n, "", "");
  return solutions;
}
