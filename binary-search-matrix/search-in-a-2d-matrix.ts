/**
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 * @param matrix
 * @param target
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length; // number of rows;
  const n = matrix[0].length; // number of columns;
  let start = 0;
  let end = m * n - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (matrix[Math.floor(mid / n)][mid % n] === target) {
      return true;
    } else if (matrix[Math.floor(mid / n)][mid % n] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  if (
    matrix[Math.floor(start / n)][start % n] === target ||
    matrix[Math.floor(end / n)][end % n] === target
  ) {
    return true;
  }
  return false;
}
