export function createMatrix<T>(m: number, n: number): T[][] {
  const matrix = new Array(m).fill(null);
  for (let i = 0; i < m; i++) {
    matrix[i] = new Array(n).fill(null);
  }
  return matrix;
}

console.log(createMatrix(3, 2));
