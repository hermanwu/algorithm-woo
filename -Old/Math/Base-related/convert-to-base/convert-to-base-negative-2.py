```
base K convertion

https://www.youtube.com/watch?v=uo0jozNyNlg

```
def convertToBaseK(n, K):
  s = ""
  while n != 0:
    r = n % K
    n //= K
    s = str(r) + s


'''