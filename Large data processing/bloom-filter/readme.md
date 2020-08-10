HashMap 是我们使用最多的数据结构，并且我们知道了在海量数据处理中，内存资源非常珍贵。

布隆过滤器（Bloom Filter，简写为 BF）

- 对普通的哈希表做了进一步的改进，是一种更省空间的哈希表。
- 当碰到内存不够的问题时，BF 就是一个很好的选择。

BF 一般有两个功能：

检测一个元素在不在一个集合中
统计一个元素的出现次数

在 Java 里面，这不就是 HashSet 和 HashMap 的作用么？实际上 BF 能做的事情就是哈希表能做的事情，但是 BF 相比哈希表，耗费更少的存储空间。既然节省了空间，同样也有一个副作用：存在 False Positive（正误识）。

现在你可能会有疑问，BF 会产生 False Positive 的话，是否会产生 False Negative 呢？答案是不会。也就是说，BF 说这个元素不在集合里，那就一定不在集合里。

现在你已经对 BloomFilter 有了大概的印象，一个更完整的 BloomFilter 会包含以下两个部分：

k 个完全独立的哈希函数
一个很大的数组
然后根据处理的问题的不同，BloomFilter 可以分为：
标准型布隆过滤器（Standard Bloom Filter，简写为 SBF，对应到 Java 里的 HashSet）
计数型布隆过滤器（Counting Bloom Filter，简写为 CBF，对应到 Java 里的 HashMap）
对于 SBF，其包含的大数组的类型为 Boolean 类型。对于 CBF，其包含的大数组的类型为整数类型。

接下来我们来讨论 BloomFilter 的第一个部分：k 个不同的哈希函数
一般来说，可以使用几个不同的算法，来获得不同的哈希函数。一个比较通用的哈希函数的写法是这样：

def hashfunc(string, hashsize):
code = 0
for c in string:
code = code \* 31 + ord(c)
code = code % hashsize

    return code
