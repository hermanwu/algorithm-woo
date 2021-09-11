给定一篇由大写字母、小写字母、逗号、句号组成的文章，求使文章不合法的字母数。
文章不合法有 2 种情况： 1.句子的第一个字母用了小写。 2.不是单词的首字母用了大写。

样例
样例 1

输入: s="This won iz correkt. It has, No Mistakes et Oll. But there are two BIG mistakes in this sentence. and here is one more."
输出: 3
解释:
'BIG' 中'I'和''G'，以及最后一句话中的第一个字母不合法.
样例 2

输入: s="Hahaha. HahaHa. hahahah."
输出: 2
解释:
'HahaHa' 中的第二个'H'和最后一个单词的第一个'h'不合法.
注意事项
一个句子当且仅当句号时结束。
文章的总长度不超过 1000010000
