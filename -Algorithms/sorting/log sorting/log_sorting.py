class Solution:
    """
    @param logs: the logs
    @return: the log after sorting
    """
    def logSort(self, logs):
        if not logs:
            return res
        
        messages = []
        numbers = []
        for log in logs:
            index = log.find(" ")
            if log[index + 1].isalpha():
                messages.append(log)
            else:
                numbers.append(log)
                
        messages.sort(key = lambda x:(x[x.find(" ") + 1:], x[:x.find(" ")]))
        messages.extend(numbers)
        return messages