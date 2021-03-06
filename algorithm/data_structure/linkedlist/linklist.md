### 链表

### 与数组的区别
1️⃣ 数组需要一块连续的内存,若内存中没有连续足够大小的空间，则会创建失败。
2️⃣ 链表不要求内存是连续的，是一组零散的内存块串联起来，从而进行数据存储的结构。
3️⃣ 数组查询效率更高：O(1),删除效率低O(n)...(因为需要数据搬移)
4️⃣ 链表查询效率较低：O(n)，删除效率较高O（1）...（只需要操作一个元素，区别在于不同的链表查找到这个元素的前驱节点所花时间可能不一样）
5️⃣ 动态扩容上：数组一旦申请就大小固定，需要扩容的话会造成非常大的数据复制操作
6️⃣ 链表比数组需要更多的存储空间，因为需要空间保存前后节点的指针
7️⃣ 链表频繁的删除操作会造成大量的内存碎片，在某些语言的机制下会频繁触发垃圾回收机制，进而影响性能

### 不同的类型
1️⃣ 单向链表
2️⃣ 双向链表
3️⃣ 循环链表

头结点用于记录基地址
尾节点

##### 删除元素
链表不需要进行节点的搬移，因为结构本来就不是连续的

只需要考虑相邻节点的联系关系

##### 查找元素
删除节点O(1)
查询效率O(n)

约瑟夫问题

##### 双向链表
1️⃣ 比单链表需要更多的储存空间
2️⃣ 在某些场景下的，插入和删除的操作都会比单向链表更加高效
3️⃣ linkHashMap

##### 单向链表
1️⃣ 保存数据本身与下一个节点的指针
2️⃣ Javascript模拟单链表，[摸我](/algorithm/data_structure/linkedlist/linkedList.js)


#### 时间换空间的相思想
1️⃣ 需要综合考虑实际情况，当前是需要省空间，还是省时间
2️⃣ 根据不同的要求使用不同的数据结构


___
### 练习
##### LRU淘汰模拟
1️⃣ 最近最少使用，使用链表先后的顺序，来记录资源的使用时间顺序
2️⃣ 实现链接[摸我](/algorithm/data_structure/linkedlist/LRU.js)

##### 使用单链表判断是否回文字符串
