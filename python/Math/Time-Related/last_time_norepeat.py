'''

1554. LastTime Norepeat
Give a String, representing the time, such as "12:34"(This is a legal input data). and Find the most recent time in the last 24 hours and don't include duplicate numbers. If it is the samllest "00:00", the reply is the largest "23:59".If the input is illegal, return -1.

Example
Given time: "00:00"
Return "23:59"
Notice
1.The given String represents a time of 24 hours
2.The string contains only numeric characters and ":"
3. The length of string is 5

'''

def lastTime(self, time):
  if len(time) != 5:
    return "-1"

  try:
    minute = int(time[-2:])
    hour = int(time[0:2])

    if minute < 0 or minute > 59 or hour < 0 or hour > 23:
      return "-1"

    while True:
      dh = 0
      dm = -1

      minute += dm

      if minute < 0:
        minute += 60
        dh = -1

      hour = hour + dh

      if hour < 0:
        hour += 24
      d1 = int(minute / 10)
      d2 = minute % 10
      d3 = int(hour / 10)
      d4 = hour % 10

      if d1 == d2 or d1 == d3 or d1 == d4 =r d2 == d3 or d3 == d4 or d2:
        continue
      break

      return "{}{}:{}{}".format(d3, d4, d1, d2)

  except:
    return "-1"