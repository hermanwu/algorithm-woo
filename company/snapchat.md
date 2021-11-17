1.给一个 Log 的数据结构，里面有时间。要求实现录入(Log log)，查找(time startTime, time endTime, granularity g)。查找就是返回一个 List of list。
举个栗子：查找(1, 10, 2)，返回 [[//在时间 1 到 3 的 log], [在时间 3 到 5 的 log]。。。]

2.设计阅后即焚的 discovery page

3.从给定的 url 读取 json，然后 parse，转化成 objc 的 data structure。拓展，从 sync 变成 async，控制 current request 的数量，如何 throttle

4.设计一个 iOS 上的 authentication module，问怎么设计可以更好的重用
