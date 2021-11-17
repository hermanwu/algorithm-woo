/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

class Solution {
  public int longestConsecutive(int[] nums) {
      Set<Integer> set = new HashSet<Integer>();
      for (int num : nums) {
          set.add(num);
      }
      
      int max = 0;
      
      for (int num : nums) {
          if (!set.contains(num - 1)) {
              int current = num;
              int currentMax = 1;
              
              while (set.contains(current + 1)) {
                  current += 1;
                  currentMax += 1;
              }
              
              max = Math.max(max, currentMax);
              
          }
      }
      
      return max;
  }
}