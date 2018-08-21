class Solution:
  """
  @param time:
  @return: return a string represent time
  """
  def lastTime(self, time):
    # Write your code here
    if not self.isValid(time):
      return '-1'

    second = int(time[0:2]) * 60 + int(time[3:5])
    lastTime = (second - 1 + 1440) % 1440
    return '{:02d}:{:02d}'.format(lastTime//60, lastTime%60)

  def isValid(self, time):
    if time is None or len(time) != 5:
      return False
    hour, minute = int(time[0:2]), int(time[3:5])
    if hour >= 24 or minute >= 60:
      return False
    return True