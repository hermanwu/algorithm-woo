'''
Employee Badge Time

We are working on a security system for a badged-access room in our company's building.
We want to find employees who badged into our secured room unusually often. We have an unordered list of names and entry times over a single day. 
Access times are given as numbers up to four digits in length using 24-hour time, such as "800" or "2250".
Write a function that finds anyone who badged into the room 3 or more times in a one-hour period. 
Your function should return each of the employees who fit that criteria, plus the times that they badged in during the one-hour period. 
If there are multiple one-hour periods where this was true for an employee, just return the first one.

badge_times = [
  ["Paul",     "1355"],
  ["Jennifer", "1910"],
  ["John",      "835"],
  ["John",      "830"],
  ["Paul",     "1315"],
  ["John",     "1615"],
  ["John",     "1640"],
  ["Paul",     "1405"],
  ["John",      "855"],
  ["John",      "930"],
  ["John",      "915"],
  ["John",      "730"],
  ["John",      "940"],
  ["Jennifer", "1335"],
  ["Jennifer",  "730"],
  ["John",     "1630"],
  ["Jennifer",    "5"]
]

Expected output (in any order)
  John:  830  835  855  915  930
  Paul: 1315 1355 1405

n: length of the badge records array
'''
'''
FollowUp：Largest Group in Room
/*
We want to find employees who badged into our secured room together often. Given an unordered list of names and access times over a single day, 
find the largest group of people that were in the room together during two or more separate time periods, and the times when they were all present.
badge_records = [
["Paul", "1214", "enter"],
["Paul", "830", "enter"],
["Curtis", "1100", "enter"],
["Paul", "903", "exit"],
["John", "908", "exit"],
["Paul", "1235", "exit"],
["Jennifer", "900", "exit"],
["Curtis", "1330", "exit"],
["John", "815", "enter"],
["Jennifer", "1217", "enter"],
["Curtis", "745", "enter"],
["John", "1230", "enter"],
["Jennifer", "800", "enter"],
["John", "1235", "exit"],
["Curtis", "810", "exit"],
["Jennifer", "1240", "exit"],
]
Expected output:
John, Paul, Jennifer: 830 to 900, 1230 to 1235
For this input data:
From 830 til 900, the room contains Jennifer, John, and Paul.
From 1230 til 1235, the room contains Curtis, Paul, Jennifer, and John.
The group "Jennifer, John, Paul" exists at both of these times, and is the largest group that exists multiple times.
You should note that the group is a subset of the people in the room from 1230 to 1235
'''

def largest_group(logs):
  records = []
  unique_users = set()

  def _gettime(timestr):
    timeint = int(timestr)
    min = timeint % 100
    hr = timeint // 100
    return min + hr * 60

  for log in logs:
    records.append((_gettime(log[1]), 0 if log[2] == "enter" else 1, log[0]))
    unique_users.add(log[0])
  records.sort()

  user_id = dict()
  for idx, user in enumerate(unique_users):
    user_id[user] = idx
  print(user_id)
  state = 0

  states_record = []
  for timeint, event, username in records:
    if event == 0:
      state |= 1 << user_id[username]
    else:
      state ^= 1 << user_id[username]
    states_record.append((state, timeint))
  
  winner_cnt = -1
  winners = []
  for i in range(len(states_record) - 1):
    for j in range(i+1, len(states_record)):
      union = states_record[i][0] & states_record[j][0]
      if bin(union).count("1") > winner_cnt:
        winner_cnt = bin(union).count("1")
        winners = [(bin(union), states_record[i][1], states_record[j][1])]
      elif bin(union).count("1") == winner_cnt:
        winners.append((bin(union), states_record[i][1], states_record[j][1]))
  return winners

badge_records = [
  ["Paul", "1214", "enter"],
  ["Paul", "830", "enter"],
  ["Curtis", "1100", "enter"],
  ["Paul", "903", "exit"],
  ["John", "908", "exit"],
  ["Paul", "1235", "exit"],
  ["Jennifer", "900", "exit"],
  ["Curtis", "1330", "exit"],
  ["John", "815", "enter"],
  ["Jennifer", "1217", "enter"],
  ["Curtis", "745", "enter"],
  ["John", "1230", "enter"],
  ["Jennifer", "800", "enter"],
  ["John", "1235", "exit"],
  ["Curtis", "810", "exit"],
  ["Jennifer", "1240", "exit"],
]
print(largest_group(badge_records))