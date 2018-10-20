import java.util.HashSet;

/**
 * 1402. Recommend Friends
 * <p>
 * Give n personal friends list, tell you user, find the person that user is most likely to know.
 * (He and the user have the most common friends and he is not a friend of user)
 * <p>
 * Example
 * <p>
 * Given list = [[1,2,3],[0,4],[0,4],[0,4],[1,2,3]], user = 0, return 4.
 * <p>
 * Explanation:
 * 0 and 4 are not friends, and they have 3 common friends. So 4 is the 0 most likely to know.
 * Given list = [[1,2,3,5],[0,4,5],[0,4,5],[0,5],[1,2],[0,1,2,3]], user = 0, return 4.
 * <p>
 * Explanation:
 * Although 5 and 0 have 3 common friends, 4 and 0 only have 2 common friends, but 5 is a 0's friend, so 4 is the 0 most likely to know.
 */
public class RecommendFriends {
  public int recommendFriends(int[][] friends, int user) {
    // Write your code here
    int max = Integer.MIN_VALUE;
    int ans = -1;

    HashSet<Integer> set = new HashSet<>();

    for (int i = 0; i < friends[user].length; i++) {
      set.add(friends[user][i]);
    }

    for (int i = 0; i < friends.length; i++) {

      if (i == user || set.contains(i)) {
        continue;
      }

      int count = 0;

      for (int j = 0; j < friends[i].length; j++) {
        if (set.contains(friends[i][j])) {
          count++;
        }
      }

      if (count > 0 && count > max) {
        max = count;
        ans = i;
      }
    }

    return ans;
  }
}
