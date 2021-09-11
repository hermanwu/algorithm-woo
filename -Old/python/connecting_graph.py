"""
Connecting Graph

Given n nodes in a graph labeled from 1 to n. There is no edges in the graph at beginning.

You need to support the following method:

connect(a, b), add an edge to connect node a and node b`.
query(a, b), check if two nodes are connected

Example
5 // n = 5
query(1, 2) return false
connect(1, 2)
query(1, 3) return false
connect(2, 4)
query(1, 4) return true

"""

class ConnectingGraph:
    """
    @param: n: An integer
    """
    def __init__(self, n):
        # do intialization if necessary
        self.fathers = [0 for _ in range(n + 1)]

    """
    @param: a: An integer
    @param: b: An integer
    @return: nothing
    """
    def connect(self, a, b):
        father_a = self.find(a)
        father_b = self.find(b)

        if (father_a != father_b):
            self.fathers[father_a] = father_b

    """
    @param: a: An integer
    @param: b: An integer
    @return: A boolean
    """
    def query(self, a, b):
        # write your code here
        return self.find(a) == self.find(b)

    def find(self, a):
        if self.fathers[a] == 0:
            return a
        else:
            self.fathers[a] = self.find(self.fathers[a])
            return self.fathers[a]