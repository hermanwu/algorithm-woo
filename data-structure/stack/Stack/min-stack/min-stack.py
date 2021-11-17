class MinStack:
    
    def __init__(self):
        # do intialization if necessary
        self.data = []
        self.mins = []

    """
    @param: number: An integer
    @return: nothing
    """
    def push(self, number):
        # write your code here
        self.data.append(number)
        if len(self.mins) == 0 or self.mins[-1] >= number:
            self.mins.append(number)

    """
    @return: An integer
    """
    def pop(self):
        # write your code here
        number = self.data.pop()
        if self.mins[-1] == number:
            self.mins.pop()
        return number

    """
    @return: An integer
    """
    def min(self):
        # write your code here
        return self.mins[-1]