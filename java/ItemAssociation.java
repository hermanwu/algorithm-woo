import java.util.*;

public class ItemAssociation {

    public String[] getLargestAssociation(String[][] pairs) {
        int count = 0;
        int size = pairs.length * 2;
        HashMap<String, Integer> dict = new HashMap<>();
        HashMap<Integer, String> reverseDict = new HashMap<>();

        UnionFind uf = new UnionFind(size * 2);

        int a, b;

        for (int i = 0; i < pairs.length; i++) {
            if (dict.containsKey(pairs[i][0])) {
                a = dict.get(pairs[i][0]);
            } else {
                a = count;
                dict.put(pairs[i][0], count);
                reverseDict.put(count, pairs[i][0]);
                count++;
            }

            if (dict.containsKey(pairs[i][1])) {
                b = dict.get(pairs[i][1]);
            } else {
                b = count;
                dict.put(pairs[i][1], count);
                reverseDict.put(count, pairs[i][1]);
                count++;
            }

            uf.union(a, b);
        }

        List<Integer> list = uf.findLargestUnion();
        String[] result = new String[list.size()];

        for (int i = 0; i < list.size(); i++ ){
            System.out.println(list.get(i));
            result[i] = reverseDict.get(list.get(i));
        }

        return result;
    }

    private class UnionFind {
        int[] fathers;

        public UnionFind(int size) {
            fathers = new int[size];

            for (int i = 0; i < size; i++) {
                fathers[i] = -1;
            }
        }

        // find the father of a node.
        public int find(int a) {
            if (fathers[a] == a) {
                return a;
            }

            return fathers[a] = find(fathers[a]);
        }

        // Union two nodes
        public void union(int a, int b) {
            // initalize father as itself when it firsts appears
            if (fathers[a] == -1) {
                fathers[a] = a;
            }

            // initalize father as itself when it firsts appears
            if (fathers[b] == -1) {
                fathers[b] = b;
            }

            int father_a = find(a);
            int father_b = find(b);

            if (father_a != father_b) {
                fathers[father_a] = father_b;
            }
        }

        public List<Integer> findLargestUnion() {
            HashMap<Integer, ArrayList<Integer>> map = new HashMap<>();

            for (int i = 0; i < fathers.length; i++) {
                if (fathers[i] != -1) {
                    int father = find(i);

                    if (map.containsKey(father)) {
                        map.get(father).add(i);
                    } else {
                        map.put(father, new ArrayList<>());
                        map.get(father).add(i);
                    }
                }
            }

            int maxSize = 0;
            List<Integer> result = null;

            for (ArrayList value : map.values()) {
                System.out.println(Arrays.toString(value.toArray()));
                if (value.size() > maxSize) {
                    maxSize = value.size();
                    result = value;
                }
            }

            return result;
        }
    }

    public static void main(String[] args) {
        String[] pair0 = new String[]{"A", "B"};
        String[] pair1 = new String[]{"B", "C"};
        String[] pair2 = new String[]{"C", "D"};
        String[] pair3 = new String[]{"E", "D"};

        String[][] input = new String[4][2];
        input[0] = pair0;
        input[1] = pair1;
        input[2] = pair2;
        input[3] = pair3;


        ItemAssociation ia = new ItemAssociation();
        String[] result = ia.getLargestAssociation(input);

        System.out.println(Arrays.toString(result));
    }
}
