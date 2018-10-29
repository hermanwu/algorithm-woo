"""
Description
Given a List, each element in the list represents a student's StudentId and GPA. Return the StudentId and GPA of the top K GPA,in the original order.

1.if k > the number of students, Return all student information.
2.Both StudentId and GPA are String.
3.The GPA between two students is different

Example
Given：

List = [["001","4.53"],["002","4.87"],["003","4.99"]]
k = 2
Return:

[["002","4.87"],["003","4.99"]]
0

"""

class Solution:
    """
    @param list: the information of studnet
    @param k: 
    @return: return a list
    """
    def topKgpa(self, list, k):
        # Write your code here
        result = []
        if not list:
            return []
        if k >= len(list):
            return list
        
        list.sort(key=lambda x:x[1], reverse=True)
        for i in range(k):
            result.append(list[i])
            
        result.sort(key=lambda x:x[0])
        
        return result