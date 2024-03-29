/**
https://leetcode.com/problems/implement-stack-using-queues/
225. Implement Stack using Queues
Implement stack using only two queues. 
The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

Example 1:
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All the calls to pop and top are valid.
 */

export class MyStack {
  private queue = [];
  private tmp = [];

  constructor() {}

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    while (this.queue.length > 1) {
      this.tmp.push(this.queue.shift());
    }
    const result = this.queue.shift();
    this.queue = this.tmp;
    this.tmp = [];
    return result;
  }

  top(): number {
    while (this.queue.length > 1) {
      this.tmp.push(this.queue.shift());
    }
    var ele = this.queue.shift();
    this.tmp.push(ele);
    this.queue = this.tmp;
    this.tmp = [];
    return ele;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
