'''

642. Moving Average from Data Stream
Given a stream of integers and a window size,
calculate the moving average of all integers in the sliding window.

Example
MovingAverage m = new MovingAverage(3);
m.next(1) = 1 // return 1.00000
m.next(10) = (1 + 10) / 2 // return 5.50000
m.next(3) = (1 + 10 + 3) / 3 // return 4.66667
m.next(5) = (10 + 3 + 5) / 3 // return 6.00000

'''

class MovingAverage:
  """
  @param: size: An integer
  """
  def __init__(self, size):
    self.store = list()
    self.max_size = size
    self.sum = 0.0

  """
  @param: val: An integer
  @return:
  """
  def next(self, val):
    if len(self.store) == self.max_size:
      v = self.store.pop(0)
      self.sum -= v
    self.sum += val
    self.store.append(val)
    return self.sum / len(self.store)