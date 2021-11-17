class MinStack:
    
    def __init__(self):
        # do intialization if necessary
        self.stack = []
        self.minStack = []

    """
    @param: number: An integer
    @return: nothing
    """
    def push(self, number):
        # write your code here
        self.stack.append(number)
        if len(self.minStack) == 0 or self.minStack[-1] >= number:
            self.minStack.append(number)

    """
    @return: An integer
    """
    def pop(self):
        # write your code here
        if self.stack[-1] == self.minStack[-1]:
            self.minStack.pop()
        return self.stack.pop()

    """
    @return: An integer
    """
    def min(self):
        # write your code here
        return self.minStack[-1]
