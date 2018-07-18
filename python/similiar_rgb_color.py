class Solution:
    """
    @param color: the given color
    @return: a 7 character color that is most similar to the given color
    """
    def similarRGB(self, color):
        """
        :type color: str
        :rtype: str
        """
        r,g,b = int(color[1:3],16), int(color[3:5],16), int(color[5:7],16)
        a = ['00','11','22','33','44','55','66','77','88','99','aa','bb','cc','dd','ee','ff']
        p = [(a[i],a[j],a[k]) for i in range(16) for j in range(16) for k in range(16)]
        res, min = '', 9999999
        for s in p:
            d = (int(s[0],16)-r)**2 + (int(s[1],16)-g)**2 + (int(s[2],16)-b)**2
            if min>d:
                min=d
                res=s
        return '#'+''.join(res)
