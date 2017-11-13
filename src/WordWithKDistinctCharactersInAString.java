// give a list of changes; find how many ways to get M;
import java.util.*;

public class WordWithKDistinctCharactersInAString {
    public static void main(String[ ] args) {
        WordWithKDistinctCharactersInAString s = new WordWithKDistinctCharactersInAString();

        String inputStr = "awaglknagawunagwkwagl";

        List<String> result = s.subStringsKDist(inputStr, 4);

        for(int i = 0; i < result.size(); i++) {
            System.out.print(result.get(i) + "    ");
        }

    }

    public List<String> subStringsKDist (String inputStr, int num) {
        List<String> result = new ArrayList<String>();

        if (inputStr == null || inputStr.length() < num) {
            return result;
        }

        int start = 0;
        int end = 0;

        HashSet<Character> dict = new HashSet<Character>();
        HashSet<String> appeared = new HashSet<String>();

        while (end < inputStr.length()) {
            if (dict.contains(inputStr.charAt(end))) {
                dict.remove(inputStr.charAt(start));
                start++;
            } else {
                dict.add(inputStr.charAt(end));
                end++;

                if (dict.size() == num) {
                    String newResult = inputStr.substring(start, end);

                    if (!appeared.contains(newResult)) {
                        appeared.add(newResult);
                        result.add(newResult);
                    }

                    dict.remove(inputStr.charAt(start));
                    start++;
                }
            }
        }

        return result;
    }
}
