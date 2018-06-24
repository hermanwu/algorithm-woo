/**

 Description
 Given a non-empty string word and an abbreviation abbr, return whether the string matches with the given abbreviation.

 A string such as "word" contains only the following valid abbreviations:

 ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
 Notice that only the above abbreviations are valid abbreviations of the string word. Any other string is not a valid abbreviation of word.

 Have you met this question in a real interview?
 Example
 Example 1:

 Given s = "internationalization", abbr = "i12iz4n":
 Return true.
 Example 2:

 Given s = "apple", abbr = "a2e":
 Return false.

 */
public class ValidWordAbbreviation {
  public boolean validWordAbbreviation(String word, String abbr) {
    // write your code here
    int i = 0;
    int j = 0;

    char[] s = word.toCharArray();
    char[] t = abbr.toCharArray();

    while (i < s.length && j < t.length) {
      if (Character.isDigit(t[j])) {
        if (t[j] =='0') {
          return false;
        }

        int val = 0;
        while ( j < t.length &&
          Character.isDigit(t[j])) {
          val = val * 10 + t[j] - '0';
          j++;
        }

        i += val;
      } else {
        if (s[i] != t[j]) {
          return false;
        }
        i++;
        j++;
      }
    }

    return i == s.length && j == t.length;
  }
}
