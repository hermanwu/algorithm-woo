'''
Our goal is to build a simplified version of a real Robinhood system that reads a customer's trades from a stream, 
maintains what they own, and rectifies running out of cash (through a process called a "margin call", which we'll define later). 
We’re looking for clean code, good naming, testing, etc. We're not particularly looking for the most performant solution.

**Step 1 (tests 1-4): Parse trades and build a customer portfolio**
Your input will be a list of trades, each of which is itself a list of strings in the form [timestamp, symbol, B/S (for buy/sell), quantity, price], e.g.
[["1", "AAPL", "B", "10", "10"], ["3", "GOOG", "B", "20", "5"], ["10", "AAPL", "S", "5", "15"]]
is equivalent to buying 10 shares (i.e. units) of AAPL for 5 each at timestamp 3, and selling 5 shares of AAPL for $15 at timestamp 10.

**Input assumptions:**
- The input is sorted by timestamp
- All numerical values are nonnegative integers
- Trades will always be valid (i.e. a customer will never sell more of a stock than they own).
From the provided list of trades, our goal is to maintain the customer's resulting portfolio (meaning everything they own), **assuming they begin with $1000**. 
For instance, in the above example, the customer would end up with $875, 5 shares of AAPL, and 20 shares of GOOG. 
You should return a list representing this portfolio, formatting each individual position as a list of strings in the form [symbol, quantity], 
using 'CASH' as the symbol for cash and sorting the remaining stocks alphabetically based on symbol. For instance, the above portfolio would be represented as
[["CASH", "875"], ["AAPL", "5"], ["GOOG", "20"]]
'''
# from collections import defaultdict
# class Portfolio:
#   def __init__(self, cash, stocks):
#     self.cash = cash
#     self.stocks = stocks

# class TradeSystem:
#   def __init__(self):
#     self.account = Portfolio(1000, defaultdict(int))
  
#   def process(self, order):
#     if order[2] == "B":
#       self.account.stocks[order[1]] += order[3]
#       self.account.cash -= order[3] * order[4]
#     elif order[2] == "S":
#       self.account.stocks[order[1]] -= order[3]
#       self.account.cash += order[3] * order[4]
#     else:
#       raise Exception("no way")

#   def balance(self):
#     return [["CASH", self.account.cash]] + list(self.account.stocks.items())

# # Test 1
# trade = TradeSystem()
# transactions = [["1", "AAPL", "B", 10, 10], ["3", "GOOG", "B", 20, 5], ["10", "AAPL", "S", 5, 15]]
# for order in transactions:
#   trade.process(order)
# print(trade.balance())

'''
**Step 2 (tests 5-7): Margin calls**
If the customer ever ends up with a negative amount of cash **after a buy**, they then enter a process known as a **margin call** to correct the situation. 
In this process, we forcefully sell stocks in the customer's portfolio (sometimes including the shares we just bought) until their cash becomes non-negative again.
We sell shares from the most expensive to least expensive shares (based on each symbol's most-recently-traded price) with ties broken by preferring the alphabetically earliest symbol.
Assume we're able to sell any number of shares in a symbol at that symbol's most-recently-traded price.
For example, ‍‌‌‍‌‍‍‌‍‌‌‍‍‌‍‍‍‌for this input:
```
[["1", "AAPL", "B", "10", "100"],
["2", "AAPL", "S", "2", "80"],
["3", "GOOG", "B", "15", "20"]]
```
The customer would be left with 8 AAPL shares, 15 GOOG shares, and 80 a share) to cover the deficit. Afterwards, they would have 6 shares of AAPL, 15 shares of GOOG, and a cash balance of $20.
The expected output would be
[["CASH", "20"], ["AAPL", "6"], ["GOOG", "15"]]
'''
from collections import defaultdict
import heapq
import math

class Portfolio:
  def __init__(self, cash, stocks):
    self.cash = cash
    self.stocks = stocks

class TradeSystem:
  def __init__(self):
    self.account = Portfolio(1000, defaultdict(int))
    self.last_price = dict()
    self.call_heap = []
  
  def process(self, order):
    self.last_price[order[1]] = order[-1]
    heapq.heappush(self.call_heap, (-order[-1], order[1]))
    if order[2] == "B":
      self.account.stocks[order[1]] += order[3]
      self.account.cash -= order[3] * order[4]
      while self.account.cash < 0:
        self.margin_call()
    elif order[2] == "S":
      self.account.stocks[order[1]] -= order[3]
      self.account.cash += order[3] * order[4]
    else:
      raise Exception("no way")

  def margin_call(self):
    while self.call_heap:
      price, name = heapq.heappop(self.call_heap)
      price = -price
      if self.account.stocks[name] > 0 and self.last_price[name] == price:
        total_cnt = self.account.stocks[name]
        need = math.ceil((-self.account.cash) / price)
        if need <= total_cnt:
          self.account.stocks[name] = total_cnt - need
          self.account.cash += price * need
        else:
          self.account.stocks[name] = 0
          self.account.cash += price * total_cnt
        break

  def balance(self):
    return [["CASH", self.account.cash]] + list(self.account.stocks.items())

# Test 2
trade = TradeSystem()
transactions = [["1", "AAPL", "B", 10, 100],["2", "AAPL", "S", 2, 80],["3", "GOOG", "B", 15, 20]]
for order in transactions:
  trade.process(order)
print(trade.balance())


'''
**Step 3/Extension 1 (tests 8-10): Collateral**
Certain stocks have special classifications, and require the customer to also own another "collateral" stock, meaning it cannot be sold during the margin call process. 
Our goal is to handle a simplified version of this phenomenon.

Formally, we'll consider stocks with symbols ending in "O" to be special, with the remainder of the symbol identifying its collateral stock. 
For example, AAPLO is special, and its collateral stock is AAPL. 
**At all times**, the customer must hold at least as many shares of the collateral stock as they do the special stock; e.g. they must own at least as many shares of AAPL as they do of AAPLO.

As a result, the margin call process will now sell the most valuable **non-collateral** share until the balance is positive again. 
Note that if this sells a special stock, some of the collateral stock may be freed up to be sold.
For example, if the customer purchases 5 shares of AAPL for 75 each, then finally 5 shares of AAPLO for 125, 
but their shares of AAPL can no longer be used to cover the deficit (since they've become collateral for AAPLO). 
As a result, 2 shares of GOOG would be sold back (again at 25, 5 AAPL, 5 AAPLO, and 3 GOOG. Thus, with an input of
[["1", "AAPL", "B", "5", "100"], ["2", "GOOG", "B", "5", "75"], ["3", "AAPLO", "B", "5", "50"]]
the corresponding output would be
[["CASH", "25"], ["AAPL", "5"], ["AAPLO", "5"], ["GOOG", "3"]

同样step2做出来后让我停下来问问。两轮technical的共同点是问如果这段代码让你作为code reviewer，会提什么意见
margin call那道题，给起始资金，给一个list of trades，[["STOCK1", "B", 100, 5], ["STOCK2", "S", 120, 5] .. ]。每一个trade给了股票的symbol，买/卖，价钱，买卖的数量。
求做完这些trades之后手里的现金和每支股票的数量，可以假设买的时候有足够的钱买，卖的时候有足够数量的股票可以卖。
第二问是，买入的时候可能手里的现金不够，但是规则是不管怎样先买入，现金不够的话就变成负数，但是一旦现金是负数的话就‍‌‌‍‌‍‍‌‍‌‌‍‍‌‍‍‍‌要卖出手里的一些股票，直到现金为非负，卖出的时候挑选price最高的优先卖出。
有第三问，但是没让做。
coding 环节明确说了不要求performance，优先解决问题，其次看代码习惯。写完代码之后问还能怎么refactor 代码
'''

