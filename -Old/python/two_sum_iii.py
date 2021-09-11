'''
Description
Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

Have you met this question in a real interview?
Example
add(1); add(3); add(5);
find(4) // return true
find(7) // return false

'''

class TwoSum:
    """
    @param: number: An integer
    @return: nothing
    """
    def __init__(self):
        self.counts = {}

    def add(self, number):
        # write your code here
        self.counts[number] = self.counts.get(number, 0) + 1

    """
    @param: value: An integer
    @return: Find if there exists any pair of numbers which sum is equal to the value.
    """
    def find(self, value):
        # write your code here
        for num in self.counts:
            if value - num in self.counts:
                if num + num == value:
                    return self.counts[num] > 1
                else:
                    return self.counts[value - num] > 0

        return False