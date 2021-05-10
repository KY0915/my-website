---
title: Floyd's cycle-finding algorithm, Tortoise and Hare
date: 2021-03-10
author: Kyuho Yi
---

# Table of Contents
TOC

# Introduction
## Definition
In computer science, cycle detection or cycle finding is the algorithmic problem of finding a cycle in a sequence of iterated function values.

For any function f that maps a finite set S to itself, and any initial value x0 in S, the sequence of iterated function values

must eventually use the same value twice: there must be some pair of distinct indices i and j such that xi = xj. Once this happens, the sequence must continue periodically, by repeating the same sequence of values from xi to xj − 1. Cycle detection is the problem of finding i and j, given f and x0.

Several algorithms for finding cycles quickly and with little memory are known. Robert W. Floyd's tortoise and hare algorithm moves two pointers at different speeds through the sequence of values until they both point to equal values. Alternatively, Brent's algorithm is based on the idea of exponential search. Both Floyd's and Brent's algorithms use only a constant number of memory cells, and take a number of function evaluations that is proportional to the distance from the start of the sequence to the first repetition. Several other algorithms trade off larger amounts of memory for fewer function evaluations.

The applications of cycle detection include testing the quality of pseudorandom number generators and cryptographic hash functions, computational number theory algorithms, detection of infinite loops in computer programs and periodic configurations in cellular automata, automated shape analysis of linked list data structures, detection of deadlocks for transactions management in DBMS.

The figure shows a function f that maps the set S = {0,1,2,3,4,5,6,7,8} to itself. If one starts from x0 = 2 and repeatedly applies f, one sees the sequence of values

2, 0, 6, 3, 1, 6, 3, 1, 6, 3, 1, ....
The cycle in this value sequence is 6, 3, 1.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Functional_graph.svg/330px-Functional_graph.svg.png)

# Problems

Floyd's cycle-detection algorithm is used to find a cycle in a sequence. There are variations to problems which you can solve using the concept of Floyd's cycle detection algorithm such as:

- Linked List Cycle https://leetcode.com/problems/linked-list-cycle/
- Linked List Cycle II https://leetcode.com/problems/linked-list-cycle-ii/

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Example 1:

![alt text](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

> Input: head = [3,2,0,-4], pos = 1
>
> Output: tail connects to node index 1
>
> Explanation: There is a cycle in the linked list, where tail connects to the second node
>
> Example 2:

![alt text](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

> Input: head = [1,2], pos = 0
>
> Output: tail connects to node index 0
>
> Explanation: There is a cycle in the linked list, where tail connects to the first node.

#Solution for Linked List Cycle II

## Code (python3)

```python

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
         self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:

        if head==None:
            return None
        tortoise=head
        hare=head


        while hare.next!=None and hare.next.next!=None:
            hare=hare.next.next
            tortoise=tortoise.next
            if hare==tortoise:

                metNode=tortoise
                **P1**=head
                **P2**=metNode
                while **P1** != **P2**:
                    **P1**=**P1**.next
                    **P2**=**P2**.next

                return **P1**


        return None

>>> a=ListNode(3)
>>> b=ListNode(2)
>>> c=ListNode(0)
>>> d=ListNode(-4)
>>> a.next=b
>>> b.next=c
>>> c.next=d
>>> d.next=b
>>> ans=Solution()
>>> result=ans.detectCycle(a)
>>> print(result.val)
2
```

## Explanation

The approach is simple. Let the hare and the tortoise race each other. The hare, which is the faster animal, can travel two times the speed of the tortoise through nodes and the tortoise travels to next node. When the input has a cycle, the hare will be running in circle endlessly in the cycle. Although the tortoise is slower than the hare, the tortoise will eventually meet the hare in one of the nodes of the cycle. Because the hare is traveling the cycle at two times the speed of the tortoise, the hare can catch the tortoise after circling the cycle once or more. We call this point intersection or meeting point **I**.

---

So you can say a cycle exists if intersection **I**. How can you find out where the cycle begins?
**Use node at the intersection and node at the start of the linked list**

Let intersection point node **P1** and head node **P2** travel from their positions to the their next node iterating until **P1** meet with **P2**. When the loop starts, return either **P1** or **P2** as the answer. The intersection point of **P1** and **P2** is the node where the cycle begins.

---

The intersection point of **P1** and **P2** is the node where the cycle begins, but why?

Let **C** be length of the cycle, **L** be the distance from head to the node where the cycle starts, and **I** be the point where the tortoise and the hare met. Let the tortoise travel **L** distance in the list(The tortoise is now at the node where the cycle begins) Since hare is traveling at two times the speed of the tortoise, you can say the hare has traveled **2L** distance if the tortoise has traveled to **L**. Out of the **2L** distance the hare has traveled, the hare has consumed **L** distance reaching the node where the cycle begins and **L** distance in the cycle which we can call **x**. The distance of **x** represents where the hare is in relative point of the node **L**. Since a cycle is a loop where the distance traveled can be reset to 0 if one makes a full cycle, we can represent x as **x** = **L** mod **C** for 0 < x < **C**. If 2L > L + C, **x** can be 0 if the hare and tortoise is on the same element when the tortoise reaches the node at **L**. Let **P1** and **P2** travels one step at a time **l** times. **P2** will be **l** steps ahead from the head and **P1** will be **l mod C** steps ahead of **I**. When **P1** and **P2** meet after **l** steps, **l = l mod C**.
