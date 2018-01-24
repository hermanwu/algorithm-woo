import java.util.HashMap;

/**
 * Created by hermanwu on 1/24/18.
 */
public class ProgrammerString {
    public static void main(String[] args) {
        Printer.print(programmerStrings("progxrammerrxproxgrammer"));
    }

    static int programmerStrings(String s) {
        HashMap<Character, Integer> map = generateCharacterMap("programmer");

        char[] inputArr = s.toCharArray();

        int left = 0;
        int right = inputArr.length - 1;

        while (left < right) {
            char temp = inputArr[left];

            if (map.containsKey(temp)) {
                map.put(temp, map.get(temp) - 1);

                if (map.get(temp) == 0) {
                    map.remove(temp);
                }

                if (map.isEmpty()) {
                    break;
                }
            }
            left++;
        }

        map = generateCharacterMap("programmer");

        while (left < right) {
            char temp = inputArr[right];

            if (map.containsKey(temp)) {
                map.put(temp, map.get(temp) - 1);

                if (map.get(temp) == 0) {
                    map.remove(temp);
                }

                if (map.isEmpty()) {
                    break;
                }
            }
            right--;
        }

        return right - left - 1 > 0 ? right - left - 1 : 0;
    }

    static HashMap<Character, Integer> generateCharacterMap(String input) {
        char[] inputArr = input.toCharArray();
        HashMap<Character, Integer> map = new HashMap<>();

        for (char c : inputArr) {
            if (map.containsKey(c)) {
                map.put(c, map.get(c) + 1);
            } else {
                map.put(c, 1);
            }
        }

        return map;
    }
}
