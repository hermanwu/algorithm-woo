'''
1 2 7 4 3 1
1 3 1 2 4 7

'''

class Solution:

  def previousPermutaiton(self, num):
    # find first number that is smaller than next
    for i in range(len(num)-2, -1, -1):
      if num[i] > num[i + 1]:
        break
      
    else:
      #completely reversed
      num.reverse()
      return num


    for j in range(len(num) - 1, i, -1):
      if num[j] < num[i]:
          num[i], num[j] = num[j], num[i]
          break

    # [i+1:] sorted 
    res = num[:i+1] + list(reversed(sorted(num[i+1:])))
    return res