b = []

"""
Add object a to end of list b
"""
b.append('a')


"""
Add object c to the beginning of list b
"""
b.insert(0, 'c')


"""
Remove object from the end of list
"""
a = a[:-1]
del a[-1]


"""
Remove object from the begining of list
"""
a.pop(0)
del a[0]

"""
deque
"""

l = deque(a)
l.popleft()
