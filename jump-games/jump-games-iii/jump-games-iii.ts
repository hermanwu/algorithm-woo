function canReachDfs(arr: number[], start: number): boolean {
  const set: Set<number> = new Set();

  function helper(arr: number[], start: number, visited: Set<number>): boolean {
    if (start < 0 || start >= arr.length || visited.has(start)) {
      return false;
    }

    if (arr[start] === 0) {
      return true;
    }

    visited.add(start);
    return (
      helper(arr, start - arr[start], visited) ||
      helper(arr, start + arr[start], visited)
    );
  }

  return helper(arr, start, set);
}
