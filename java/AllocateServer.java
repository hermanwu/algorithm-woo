import java.util.*;

/**
 * 1. Write a function(int[]) -> int that returns the lowest unassigned integer.
 * For example [] -> 1 (empty set), [1] -> 2, [5, 3, 1] -> 2.

        Either sort the array, iterate, and compare current and previous. If there is a gap then that's your number;
        Or use hashmap to insert all existing numbers, then check the first missing number.


 2. Extend (1), write functions:
 * string allocate(string serverName):
 * return a string which is the given server name + the lowest unassigned integer for this name.
 * Ex: allocate("wash"), return something like wash3.
 *
 * deallocate(string allocatedServerName):
 * eg., given wash3, need to return 3 to the unassigned number set for "wash".

 given a list

 space complexity
 time complexity
 trade off

 */

public class AllocateServer {
    private HashMap<String, PriorityQueue<Integer>> map = new HashMap<>();
    private HashMap<String, LinkedList<Integer>> listMap = new HashMap<>();


    public static void main(String[] args) {
        AllocateServer a = new AllocateServer();

        int[] input = new int[0];
        //Printer.print(a.findFirstAvailableNumber(input));

        int[] input2 = new int[]{ 1, -2, 3 };

        //Printer.print(a.findFirstAvailableNumber(input2));

        int[] input3 = new int[]{1, 1, 2, 2, 5};

        //Printer.print(a.findFirstAvailableNumber(input3));

        int[] input4 = new int[]{13, 14, 15, 16};
        //Printer.print(a.findFirstAvailableNumber(input4));

        a.allocate("test");
        a.allocate("test");
        a.allocate("test");
        a.deallocate("test2");
        a.allocate("test");


        Printer.print(a.listMap.get("test").get(0));
        Printer.print(a.listMap.get("test").get(1));

    }

    // are there negative all negative number?
    // duplicate?
    //
    public int findFirstAvailableNumber(int[] a) {
        int[] b = a.clone();
        Arrays.sort(b);

        int index = 0;
        int n = b.length;

        while (index < n && b[index] <= 0) {
            index++;
        }


        // [ 1, 2, 2, 3, 4 ]
        int smallest = 0;

        while (index < n) {
            if (b[index] == smallest) {
                index++;
            } else if (b[index] == smallest + 1) {
                index++;
                smallest++;
            } else {
                return smallest + 1;
            }
        }

        return smallest + 1;
    }

    public String allocate(String type) {
        if (!listMap.containsKey(type)) {
            LinkedList<Integer> list = new LinkedList<>();
            list.add(1);

            listMap.put(type, list);
            return type + 1;
        } else {
            LinkedList<Integer> list = listMap.get(type);

            int smallest = 0, index = 0, n = list.size();

            while (index < n) {
                int cur = list.get(index);
                if (cur == smallest) {
                    index++;
                } else if (cur == smallest + 1) {
                    index++;
                    smallest++;
                } else {
                    break;
                }
            }

            smallest++;

            list.add(index, smallest);

            return type + smallest;
        }
    }

    public void deallocate(String name) {
        int num = getNumber(name);
        String type = getType(name);


        if (listMap.containsKey(type)) {
            listMap.get(type).remove(Integer.valueOf(num));
        }
    }

    public String getType(String name) {
        int i;

        for (i = 0; i < name.length(); i++) {
            if (Character.isDigit(name.charAt(i))) {
                break;
            }
        }

        return name.substring(0, i);
    }

    public int getNumber(String name) {
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = name.length() - 1; i >= 0; i--) {
            char c = name.charAt(i);

            if (Character.isDigit(c)) {
                stringBuilder.insert(0, c);
            } else {
                break;
            }
        }

        int result = Integer.parseInt(stringBuilder.toString());
        return result;
    }
}
