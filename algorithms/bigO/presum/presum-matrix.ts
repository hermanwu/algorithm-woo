import { createMatrix } from "../../../_DataStructure/Matrix/create-matrix";

export function preSumMatrix(matrix: number[][]) {
  const m = matrix.length;
  const n = matrix[0].length;

  const result = createMatrix<number>(m, n);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        result[i][j] = matrix[i][j];
      } else {
        result[i][j] = result[i][j - 1] + matrix[i][j];
      }
    }
  }

  return result;
}
