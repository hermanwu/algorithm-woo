- Architecture design

- Think of yourself as town planner.
- Plan for zoning the area.

- System design template

1. Requirements

- read, write
- functional, non-functional

2. traffic

- read, write
- DAU
- Requests
- Size - 1 character -> 1 bytes.

3. flow graph

- from client to service to db
- general solution

1. Web application，典型例子：设计一个 e-commerce 商品的 detail page(参考 Amazon 商品 detail page)。设计一个 online 小游戏。设计一个论坛。
2. 简单的 Web Service，典型例子：设计一个 short url service。
3. 实时／半实时的消息 update，典型例子：messenger，news feed。
4. 数据系统，典型例子：top url hits, unique url hits
5. 内容分发系统，典型例子：设计 Netflix CDN
6. 专业知识，典型例子：推荐系统，分布式系统基础架构，搜索。。。

个人认为，要想在 System Design 上面达到像刷题那样的熟练程度，对于刚刚入行一两年甚至三四年的朋友来说，是不可能的，因为这些问题要想准确答出，已经远远超出了对 junior engineer 的要求，甚至已经是 senior engineer 的水准。

但是即使面试官并没有期望你达到 senior engineer 的水准，至少他还是想要通过这个问题来摸清你的工程经验，如果所答完全非所问，那么给面试官留下的印象将是非常糟糕的。你的方案可以不是最优的，甚至可能离最优有一段距离，但是你的方案一定不能是 ridiculous 的。起码在小的 scale 上要能有可行性，可以展现你的一些基本 design sense。

基础知识的准备：

1. 数据库 —— 了解 relational 数据库(Oracle/postgres)的基本知识，了解数据库的 partition，了解查询，了解数据库的 replication；了解现在流行的 NoSQL databases: key-value database (Riak/DynamoDB)，document based(mongodb)，graph based, big table(or column based - HBase)...这里 DynamoDB 有个 paper，关于 eventually consistence 需要明白 CAP 定理。
2. 队列服务—— 了解 Kafka 或者 Kinesis，明白队列服务的应用场景
3. Web 层，了解 MVC，具体技术可以了解 Spring，Nodejs
4. 前端，了解 Javascript，Html
5. 了解 SOAP 和 RESTful
6. 理解 cache——如何以及在何种情况下运用 cache 降低 latency
7. 理解现代分布式系统需要大量 monitor 以及 log analysis
8. 理解系统中不能有 single point of failure，从 failure 的角度出发设计系统，运用 Write Ahead Log 进行故障恢复，充分 replicate 你的 service 所以任何一个机器、集群、机房的灾难都不会对你的整体服务造成不可挽回的影响
9. 处理高并发，明白资源共享是影响并发的主要原因之一（另一个原因是进程间通信）——如何 decouple 共享资源，提高并发效率
10. 明白基本的效率评定标准，如 TPS。。。
11. 理解一些分布式系统的基本概念，如上面提到的 CAP，以及 Consistent Hashing，Vector Clock
12. 读一些 paper，如 Akamai 的 CDN，Amazon 的 Dynamo，Google 的 Map-reduce（很老嗯）等等
13. 亲手实现一个简单的网站，从前端到数据库都接触一些
14. 了解 Hadoop 的基本功能，如 HDFS，Map-Reduce。
15. 了解 Apache Storm 的基本功能。
16. 结合所学的基础知识，考虑你所设计的系统的 Availability，Scalability 和 Performance.

基本想到的就这些。有需要的话我再补充。
