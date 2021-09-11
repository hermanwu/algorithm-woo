# sort based on a tuple (stirng first, number second)
messages = ['1 ddd', '2 aaa', '3 ddd']
messages.sort(key = lambda x:(x[x.find(" ") + 1], x[:x.find(" ")]))
# result ['2 aaa', '1 ddd', '3 ddd']
