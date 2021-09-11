class Solution:
    """
    @param length: the length of the array
    @param updates: update operations
    @return: the modified array after all k operations were executed
    """
    def getModifiedArray(self, length, updates):
        # Write your code here

        result = [0 for _ in range(length)]
        changes = [0 for _ in range(length + 1)]

        for update in updates:
            left = update[0]
            right = update[1]
            increment = update[2]
            
            changes[left] += increment
            changes[right + 1] -= increment
            
        print(changes)
            
        result[0] = changes[0]    
        for i in range(1, length):
            result[i] += changes[i] + result[i - 1]
                
        return result