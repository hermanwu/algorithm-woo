'''
coding那题细节是这样的：输入是类似这样一个string："1:2,3:4,9:8,5:10,13:18,34:32,55:44"，
每一个"1:3"这样的小段是"price:timestamp"的一个数据对，代表一个股票在特定时间的价格，输入的这些数据对是按timestamp排序的。
输出的是像robinhood的app里面需要用到的固定time interval的关于股价的candlestick一样的数据，包含起始时间，max价格，min价格，first价格，last价格。
复杂点在这儿：起始时间必须是10的倍数 (0, 10, 20, 30, etc.)，interval的长度也就是10，
如果一个interval里面没有交易价格（比如 [20, 30)这个interval里面就没有input数据，
那么这个candlestick数据里面的所有价格都用上一个interval里面的last价格。
以上面那个input为例子，正确的输出应该是："{0,9,1,1,9}{10,13,5,5,13}{20,13,13,13,13}{30,34,34,34,34}{40,55,55,55,55}"，
注意中间{20,13,13,13,13}这个candlestick，想清楚这个是怎么出来的就理解到题意了。楼主做完这个题只剩10分钟，面试官就没接着问了，
不知道还有没有followup。题目要求里面有提到说不需要最优化，会考察naming，code style之类的方面，
所有楼主一开始写的时候就写了一些class来表示处理过的input，之后debug的时候还挺好用的，要不估计debug不出来。
'''
'''
论坛上有人讨论过，输入
string："1:2,3:4,9:8,5:10,13:18,34:32,55:44"
每一个"1:3"这样的小段是"price:timestamp"的一个数据对，然后计算固定time interval的max, min, first, last price

想请问一下这个固定time interval是指input指定start和end timestamp吗，比如给定1和6就只要return max/min/first/last price between time 1-6?
还是说给定一个time interval length要return每个interval 的min/max/first/last, 比如totaltime=10，interval=2那就要
return result for each time interval of 1-2, 3-4, 5-6, 7-8, 9-10?
'''

'''
Important: If an interval has no prices, use the previous datapoint’s last price for all prices. If there are no prices and no previous datapoints, skip the interval.

Input: [str]
return: [dict {start,first,last,max,min}]
'''

'''
prices_to_parse: "3:12,1:15,4:18,1:30,5:40,9:47,2:101,6:103,5:105,3:107,5:108,8:120,9:121,7:122,9:124,3:125,2:126,3:127,8:128,4:129"
Expected Output:
"{10,3,4,4,1}{20,4,4,4,4}{30,1,1,1,1}{40,5,9,9,5}{50,9,9,9,9}{60,9,9,9,9}{70,9,9,9,9}{80,9,9,9,9}{90,9,9,9,9}{100,2,5,6,2}{110,5,5,5,5}{120,8,4,9,2}"

'''
INTERVAL = 10

def solution(prices_to_parse):
    result = []
    if not prices_to_parse:
        return result
    # 1.figure out the start of the iteration
    prices = []
    for pair in prices_to_parse.split(","):
        price, timestamp = pair.split(":")
        prices.append((int(price), int(timestamp)))
    iteration_start = (prices[0][1] // INTERVAL) * INTERVAL
    
    # 2.sliding the windows and append to result
    left = right = 0
    while left < len(prices):
        # reset states per iteration
        win_min = float("inf")
        win_max = float("-inf")
        right_prev = left
        iteration_end = iteration_start + INTERVAL
        # move left ahead if left doesn't fall into current window
        if prices[left][1] > iteration_end:
            if result:
                last_val = result[-1][2]
                result.append((iteration_start, last_val, last_val, last_val, last_val))
                iteration_start += INTERVAL
            continue 
        # loop through the windows 0-9, 10-19, 20-29
        while right < len(prices) and prices[right][1] < iteration_end:
            win_min = min(win_min, prices[right][0])
            win_max = max(win_max, prices[right][0])
            right += 1
            right_prev = right - 1
        # move to next iteration if right > current iteration_end, flush states values to result, and move left to right
        result.append((iteration_start, prices[left][0], prices[right_prev][0], win_max, win_min))
        print(f"checkpoint2 {left}, {right}, {iteration_start}, {iteration_end}")
        left = right
        iteration_start += INTERVAL
    
    # 3.output as string
    print(f"checkpoint3 {result}")
    output = ""
    for chunk in result:
        output += "{"
        output += ",".join(map(str, chunk))
        output += "}"
    print("result: " + output)
    return output
        












