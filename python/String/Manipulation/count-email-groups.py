'''
1632. Count email groups
Give you an array of n email addresses.
Please find out how many email groups there are which has more than one email address.

Two addresses are in the same group only if they are the same string after we handle them by these rules:

Ignore the character '.' in NAME-PART which before the character '@'.
Ignore the substring between the first '+' and the character '@'. And we will ignore the '+' but keep the '@' in the string after this step.
Example
emails: ["abc.bc+c+d@jiuzhang.com", "abcbc+d@jiuzhang.com", "abc.bc.cd@jiuzhang.com"]

count: 1

There is only one group has more than one email address. It is "abcbc@jiuzhang.com".
emails: ["abc.b+c+d@jiuzhang.com", "abcbc+d@jiuzhang.com", "abc.bc.cd@jiuzhang.com"]

count: 0

There is no group meet the conditions.
Notice
a email group have at least two same email address


["ab.cd+cd@jiu.zhang.com", "ab.cd+cd@jiuzhang.com", "ab+cd.cd@jiuzhang.com"]

'''

class Solution:
    """
    @param emails: Original email
    @return: Return the count of groups which has more than one email address in it.
    """
    def countGroups(self, emails):
        map = {}
        
        for email in emails:
            idx = email.rfind('@')
            domain = email[idx: ]
            prefix = email[ :idx]
            
            i = prefix.find('+')
            if i != -1:
                prefix = prefix[:i]
            
            prefix = prefix.replace('.', '')
            
            email = prefix + domain
            map[email] = map.get(email, 0) + 1
        
        count = 0
        
        for val in map.values():
            if val > 1:
                count += 1
        
        return count