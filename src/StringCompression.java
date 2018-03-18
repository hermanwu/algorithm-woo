/**
 Given an array of characters, compress it in-place.

 The length after compression must always be smaller than or equal to the original array.

 Every element of the array should be a character (not int) of length 1.

 After you are done modifying the input array in-place, return the new length of the array.


 Follow up:
 Could you solve it using only O(1) extra space?
 */
public class StringCompression {
    public int compress(char[] chars) {
        int writePointer = 0;
        int n = chars.length;
        int left = 0;
        int right = 0;

        while (left < n) {
            right = left;

            while (right < n && chars[left] == chars[right]) {
                right++;
            }

            chars[writePointer] = chars[left];
            writePointer++;

            if (right - left > 1) {
                for (char c : String.valueOf(right - left).toCharArray()) {
                    chars[writePointer] = c;
                    writePointer++;
                }
            }
            left = right;
        }

        return writePointer;
    }
}
