/**
 Description
 Given two strings s and t, determine if they are isomorphic.

 Two strings are isomorphic if the characters in s can be replaced to get t.

 All occurrences of a character must be replaced with another character while preserving the order of characters.
 No two characters may map to the same character but a character may map to itself.
 You may assume both s and t have the same length.
 Have you met this question in a real interview?  Yes
 Example
 Given s = "egg", t = "add", return true.

 Given s = "foo", t = "bar", return false.

 Given s = "paper", t = "title", return true.

 */
public class IsomorphicStrings {
  public boolean isIsomorphic(String s, String t) {
    // write your code here
    int[] map = new int[256];

    for (int i = 0; i < s.length(); i++) {
      if (map[s.charAt(i)] == 0) {
        map[s.charAt(i)] = t.charAt(i);
      } else if (map[s.charAt(i)] == t.charAt(i)) {
        continue;
      } else {
        return false;
      }
    }


    map = new int[256];

    for (int i = 0; i < t.length(); i++) {
      if (map[t.charAt(i)] == 0) {
        map[t.charAt(i)] = s.charAt(i);
      } else if (map[t.charAt(i)] == s.charAt(i)) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }
}
