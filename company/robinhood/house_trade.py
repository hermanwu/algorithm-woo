'''
A *trade* is defined as a fixed-width string containing the 4 properties given below separated by commas:
- Symbol (4 alphabetical characters, left-padded by spaces)
- Type (either "B" or "S" for buy or sell)
- Quantity (4 digits, left-padded by zeros)
- ID (6 alphanumeric characters)
e.g. `"AAPL,B,0100,ABC123"`
which represents a trade of a buy of 100 shares of AAPL with ID "ABC123"
Given two lists of trades - called "house" and "street" trades, write code to filter out groups of *matches* between trades and return a list of *unmatched* house and street trades sorted alphabetically. 
There are many ways to *match* trades, the first and most important way is an *exact match* (Tests 1-5):
- An exact match is a house_trade+street_trade pair with identical symbol, type, quantity, and ID

**Note: Trades are distinct but not unique**

For example, given the following input:

```
// house_trades:
[
  "AAPL,B,0100,ABC123",
  "AAPL,B,0100,ABC123",
  "GOOG,S,0050,CDC333"
]

// street_trades:
[
  " FB,B,0100,GBGGGG",
  "AAPL,B,0100,ABC123"
]
```

We would expect the following output:

```
[
  " FB,B,0100,GBGGGG",
  "AAPL,B,0100,ABC123",
  "GOOG,S,0050,CDC333"
]
```

Because the first (or second) house trade and second street trade form an exact match, leaving behind three unmatched trades.

Follow-up 1 (Test 6,7,8,9): A "fuzzy" match is a house_trade+street_trade pair with identical symbol, type, and quantity *ignoring* ID. 
Prioritize exact matches over fuzzy matches. Prioritize matching the earliest alphabetical house trade with the earliest alphabetical street trade in case of ties.

Follow-up 2: (Test 10) An offsetting match is a house_trade+house_trade or street_trade+street_trade pair where the symbol and quantity of both trades are the same, but the type is different (one is a buy and one is a sell). 
Prioritize exact and fuzzy matches over offsetting matches. Prioritize matching the earliest alphabetical buy with the earliest alphabetical sell.
'''

house = [
  "AAPL,B,0100,ABC123",
  "AAPL,B,0100,ABC123",
  "GOOG,S,0050,CDC333"
]
street = [
  " FB,B,0100,GBGGGG",
  "AAPL,B,0100,ABC123",
  "AAPL,B,0100,FGE321"
]

def exact_match(house, street):
  h, s = house.copy(), street.copy()
  idx_h = set()
  idx_s = set()
  hi = si = 0
  while hi < len(h):
    si = 0
    while si < len(s):
      if si not in idx_s:
        if h[hi] == s[si]:
          idx_h.add(hi)
          idx_s.add(si)
          break
      si += 1
    hi += 1
  return idx_h, idx_s

def fuzzy_match(house, street, filterh, filters):
  h, s = house.copy(), street.copy()
  hi = si = 0
  while hi < len(h):
    if hi not in filterh:
      si = 0
      while si < len(s):
        if si not in filters:
          if h[hi][:-7] == s[si][:-7]:
            filterh.add(hi)
            filters.add(si)
            break
        si += 1
    hi += 1
  return filterh, filters

def loop(house, street, cross_h, cross_s):
  res = []
  for i in range(len(house)):
    if i not in cross_h:
      res.append(house[i])
  for j in range(len(street)):
    if j not in cross_s:
      res.append(street[j])
  return sorted(res)

cross_h, cross_s = exact_match(house, street)
print(loop(house, street, cross_h, cross_s))

cross_h, cross_s = fuzzy_match(house, street, cross_h, cross_s)
print(loop(house, street, cross_h, cross_s))