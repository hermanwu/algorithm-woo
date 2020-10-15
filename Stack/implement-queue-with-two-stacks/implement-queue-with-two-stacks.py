class MyQueue:

    def __init__(self):
        self.a = []

    def push(self, e):
        self.a.append(e)

    def pop(self):
        e = self.a[0]
        self.a.remove(e)
        return e

    def top(self):
        return self.a[0]
