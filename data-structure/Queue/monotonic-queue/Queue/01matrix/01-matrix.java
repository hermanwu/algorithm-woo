import java.util.Queue;

// Given a matrix consist of 0 and 1, find the distance of the nearest 0 for each cell.

class Solution {
  public int[][] updateMatrix(int[][] matrix) {
    int rows = matrix.length;
    int col = matrix[0].length;

    // dimension reduction.
    Queue<Integer> queue = new LinkedList<>();

    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (matrix[i][j] == 0 ) {
          queue.offer(i * cols + j);
        } else if (matrix[i][j] == 1) {
          matrix[i][j] = Integer.MAX_VALUE;
        }
      }
    }

    // simple way to search four directions
    int[] dir = {0, 1, 0, -1, 0};

    while (!queue.isEmpty()) {
        int top = queue.poll();
        for (int k = 0; k < dir.length - 1; k++) {
          int x = top/cols + dir[k]; // new row index;
          int y = top%col + dir[k + 1]; // new col index;

          if (x >= 0 &&
              x < rows && 
              y >= 0 && 
              y < cols && 
              matrix[x][y] > 0 && 
              // if the new number is shorter result than existing one
              matrx[x][y] > matrix[top/cols][top%cols] + 1) {
            matrx[x][y] = matrix[top/cols][top%cols] + 1;
            queue.offer(x * cols + y);
          }

        }
    }

  }
}