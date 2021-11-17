'''
描述
给一个字符串，代表时间，如"12:34"（这是一个合法的输入数据），并找到它的下一次不重复(不存在相同的数字)的时间。如果它是最大的时间"23:59"，那么返回的答案是最小的"01:23"。如果输入是非法的，则返回-1

1.给定的字符串表示24小时的时间
2.该字符串仅包含数字字符和":"
3.字符串的长度为5

您在真实的面试中是否遇到过这个题？
样例
给定: "23:59"

返回:  "01:23"
'''

def nextTime(self, time):
  if len(time) != 5:
    return "-1"

  hour = int(time[:2])
  minute = int(time[3:])

  if hour > 23 or minute > 59:
    return "-1"

  while True:
    minute += 1
    if minute == 60:
      minute = 0
      hour += 1

    if hour == 24:
      hour = 0

    a = hour // 10
    b = hour % 10
    c = minute // 10
    d = minute % 10

    if a != b and a != c and a != d and b != c and b != d and c != d:
      return str(a) + str(b) + ":" + str(c) + str(d)

  return ""