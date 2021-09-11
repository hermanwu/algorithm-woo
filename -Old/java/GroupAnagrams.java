import java.util.*;

/**
 Given an array of strings, group anagrams together.

 For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
 Return:

 [
 ["ate", "eat","tea"],
 ["nat","tan"],
 ["bat"]
 ]
 Note: All inputs will be in lower-case.
 */

public class GroupAnagrams {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();

        for (String str : strs) {
            // sort each string and add them to a map.
            char[] arr = str.toCharArray();
            Arrays.sort(arr);
            String sortedString = String.valueOf(arr);

            if (!map.containsKey(sortedString)) {
                map.put(sortedString, new ArrayList<String>());
            }
            map.get(sortedString).add(str);
        }

        // sort each group alphabetically.
        for (String key : map.keySet()) {
            Collections.sort(map.get(key));
        }

        return new ArrayList<List<String>>(map.values());
    }
}
