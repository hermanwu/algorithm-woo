/**
 * Created by hermanwu on 1/5/18.
 */
public class BinarySearch {

    public static void main(String[] args) {
        BinarySearch bs = new BinarySearch();

        int[] input1 = new int[]{1, 2, 2, 2, 3, 3};

        Printer.print(bs.binarySearch(input1, 0));
        Printer.print(bs.binarySearch(input1, 1));
        Printer.print(bs.binarySearch(input1, 2));
        Printer.print(bs.binarySearch(input1, 3));
    }

    // [1, 1]
    public static int binarySearch(int[] arr, int target) {
        if (arr == null || arr.length == 0) {
            return -1;
        }

        int start = 0,
                end = arr.length - 1;

        while ( start < end ) {
            int mid = ( start + end ) / 2;

            if (arr[mid] == target) {
                end = mid;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        if (arr[start] == target) {
            return start;
        }

        if (start + 1 < arr.length && arr[start + 1] == target) {
            return start + 1;
        }

        return -1;
    }

    public static int binarySearch2(int[] arr, int target) {
        if (arr == null || arr.length == 0) {
            return -1;
        }

        int start = 0,
                end = arr.length - 1;

        while ( start + 1 < end ) {
            int mid = ( start + end ) / 2;

            if (arr[mid] == target) {
                end = mid;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        if (arr[start] == target) {
            return start;
        }

        if (end == target) {
            return end;
        }

        return -1;


    }
}
