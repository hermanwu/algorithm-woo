/**
 input: A 2-dimensional array NxN - Matrix - with positive and negative elements.

 Output: A submatrix of any size such that its summation is the maximum among all possible submatrices.

 Requirement: Algorithm complexity to be of O(N^3)

 https://github.com/mission-peace/interview/blob/master/src/com/interview/dynamic/SubRectangularMatrixWithMaximumSum.java

 */
public class MaximumSumSubrectangleIn2DMatrix {

    class Result {
        int maxSum;
        int leftBound;
        int rightBound;
        int upBound;
        int lowBound;

        @Override
        public String toString() {
            return "Result [maxSum=" + maxSum + ", leftBound=" + leftBound
                    + ", rightBound=" + rightBound + ", upBound=" + upBound
                    + ", lowBound=" + lowBound + "]";
        }
    }

    public Result maxSum(int input[][]) {
        int rows = input.length;
        int cols = input[0].length;
        int temp[] = new int[rows];
        Result result = new Result();

        // iterate every col and row
        for (int left = 0; left < cols; left++) {
            for (int i = 0; i < rows; i++) {
                temp[i] = 0;
            }

            for (int right = left; right < cols; right++) {
                for (int i = 0; i < rows; i++) {
                    temp[i] += input[i][right];
                }

                // use kadane algorithm to calculate sum of every row.
                KadaneResult kadaneResult = kadane(temp);
                if(kadaneResult.maxSum > result.maxSum){
                    result.maxSum = kadaneResult.maxSum;
                    result.leftBound = left;
                    result.rightBound = right;
                    result.upBound = kadaneResult.start;
                    result.lowBound = kadaneResult.end;
                }
            }
        }
        return result;
    }

    class KadaneResult{
        int maxSum;
        int start;
        int end;
        public KadaneResult(int maxSum, int start, int end) {
            this.maxSum = maxSum;
            this.start = start;
            this.end = end;
        }
    }

    private KadaneResult kadane(int arr[]) {
        int max = 0;
        int maxStart = -1;
        int maxEnd = -1;
        int currentStart = 0;
        int maxSoFar = 0;

        for (int i = 0; i < arr.length; i++) {
            maxSoFar += arr[i];

            if (maxSoFar < 0) {
                maxSoFar = 0;
                currentStart = i + 1;
            }

            if (max < maxSoFar) {
                maxStart = currentStart;
                maxEnd = i;
                max = maxSoFar;
            }
        }
        return new KadaneResult(max, maxStart, maxEnd);
    }

    public static void main(String args[]){
        int input[][] = {{ 2,  1, -3, -4,  5},
                { 0,  6,  3,  4,  1},
                { 2, -2, -1,  4, -5},
                {-3,  3,  1,  0,  3}};
        MaximumSumSubrectangleIn2DMatrix m = new MaximumSumSubrectangleIn2DMatrix();
        System.out.println(m.maxSum(input));
    }
}
