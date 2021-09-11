"""
Description
Given a map size of m*n, 1 means space, 0 means obstacle, 9 means the endpoint. You start at (0,0) and return whether you can reach the endpoint.

Have you met this question in a real interview?  
Example
Input:[[1,1,1],[1,1,1],[1,1,9]]
Output:true
"""

class Solution:
    """
    @param map: the map
    @return: can you reach the endpoint
    """
    def reachEndpoint(self, map):
        # Write your code here
        m = len(map)
        n = len(map[0])
        visited = [[0 for _ in range(n)] for j in range(m)]
        
        stack = []
        stack.append([0, 0])
        visited[0][0] = 1

        while stack:
            tmp = stack.pop()
            x = tmp[0]
            y = tmp[1]
            visited[x][y] = 1

            if map[x][y] == 9:
                return True

            for nx, ny in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                newX = x + nx
                newY = y + ny
                
                if self.isValidPoint(newX, newY, visited, map):
                    stack.append([newX, newY])
                    
        return False
                    

    def isValidPoint(self, x, y, visited, map):
        if x < 0 or x >= len(map) or y < 0 or y >= len(map[0]):
            return False
        if visited[x][y]:
            return False
        # when it is obstacle
        if map[x][y] == 0:
            return False 
        
        return True