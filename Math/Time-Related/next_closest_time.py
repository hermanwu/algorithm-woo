'''
862. Next Closest Time
Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

Example
Given time = "19:34", return "19:39".

Explanation:
The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.
Given time = "23:59", return "22:22".

Explanation:
The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.

'''

def nextCloestTime(self, time):
  nums = set([int(i) for i in time if 48 <= ord(i) <= 57])
  num1 = int(time[:2])
  num2 = int(time[3:])
  for i in range(1, 1441):
    cnt = 0
    num2 += 1
    cnt += num2 // 60
    num2 %= 60
    num1 += cnt
    num1 %= 24
    if num2 < 10:
      temp_num2 = '0' + str(num2)
    else:
      temp_num2 = str(num2)
    if num1 < 10:
      temp_num1 = '0' + str(num1)
    else:
      temp_num1 = str(num1)
    new_set = set([int(i) for i in temp_num1 + temp_num2])
    if new_set <= nums:
      return temp_num1 + ':' + temp_num2