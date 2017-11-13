import java.util.*;

/**
 * Created by hermanwu on 11/12/17.
 */
public class ShortestTagList {
    public static void main(String[] args) {
        ShortestTagList s = new ShortestTagList();

        List<String> targetList = new ArrayList<String>();

        targetList.add("in");
        targetList.add("the");
        targetList.add("spain");

        List<String> availableTagList = new ArrayList<String>();

        availableTagList.add("the");
        availableTagList.add("spain");
        availableTagList.add("that");

        availableTagList.add("the");
        availableTagList.add("rain");
        availableTagList.add("in");

        availableTagList.add("spain");
        availableTagList.add("stays");
        availableTagList.add("forecast");

        availableTagList.add("in");
        availableTagList.add("the");

        List<Integer> finalResult = s.subSequenceTags(targetList, availableTagList);

        for (int i = 0; i < finalResult.size(); i++) {
            System.out.println(finalResult.get(i));
        }
    }

    public List<Integer> subSequenceTags(List<String> targetList,
                                         List<String> availableTagList) {
        List<Integer> result = new ArrayList<Integer>();

        Queue<Word> q = new LinkedList<Word>();
        HashSet<String> dict = new HashSet<>();
        HashSet<String> appeared = new HashSet<String>();

        int end = 0;
        int resultLength = -1;

        for (String s : targetList) {
            dict.add(s);
        }

        while (end < availableTagList.size()) {
            String word = availableTagList.get(end);
            if (dict.contains(word)) {
                q.add(new Word(word, end));

                // never appeared before
                if (!appeared.contains(word)) {
                    appeared.add(word);
                } else {
                    while (!q.peek().name.equals(word)) {
                        appeared.remove(q.poll().name);
                    }
                    q.poll();
                }

                // if list is full
                if (appeared.size() == targetList.size()) {
                    int left = q.peek().position;
                    int right = end;

                    if (resultLength == -1 || right - left + 1 < resultLength) {
                        result = new ArrayList<>();
                        result.add(left);
                        result.add(right);
                        resultLength = right - left + 1;
                    }
                }
            }

            end++;
        }

        return resultLength == -1 ? new ArrayList<>() : result;
    }

    private class Word{
        String name;
        int position;

        public Word(String name, int position) {
            this.name = name;
            this.position = position;
        }
    }
}
