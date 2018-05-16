import java.util.ArrayList;
import java.util.List;

/**
 https://www.lintcode.com/problem/twitch-words/description

 DescriptionConsole
 1401. Twitch Words

 Our normal words do not have more than two consecutive letters. If there are three or more consecutive letters,
 this is a tics. Now give a word, from left to right, to find out the starting point and ending point of all tics.

 Example

 Given str = "whaaaaatttsup", return [[2,6],[7,9]].

 Explanation:
 "aaaa" and "ttt" are twitching letters, and output their starting and ending points.
 Given str = "whooooisssbesssst", return [[2,5],[7,9],[12,15]].

 Explanation:
 "ooo", "sss" and "ssss" are twitching letters, and output their starting and ending points.

 */
public class TwitchWords {
    /**
     * @param str: the origin string
     * @return: the start and end of every twitch words
     */

    class Pair {
        public int L;
        public int R;
        Pair(int L, int R) {
            this.L = L;
            this.R = R;
        }
    }

    public int[][] twitchWords(String str) {
        List<Pair> ans = new ArrayList<>();

        int i = 0;
        int j = 0;


        while( i < str.length()) {
            while (j < str.length() && str.charAt(i) == str.charAt(j)) {
                j++;
            }

            if ( j - i > 2 ) {
                ans.add(new Pair(i, j - 1));
            }
            i = j;
        }

        int[][] result = new int[ans.size()][2];
        for (i = 0; i < ans.size(); i++) {
            result[i] = new int[2];
            result[i][0] = ans.get(i).L;
            result[i][1] = ans.get(i).R;
        }

        return result;
    }
}
