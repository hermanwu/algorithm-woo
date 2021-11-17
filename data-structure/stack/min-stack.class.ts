/**
155. Min Stack
// https://leetcode.com/problems/min-stack/
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
 
Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2


// NOTE
// Try avoiding use the shift.
 */

export class MinStack {
  generalStack = [];
  monotonicIncreasingStack = [];
  error = new Error("empty stack error");

  constructor() {}

  push(val: number): void {
    this.generalStack.unshift(val);

    if (
      this.monotonicIncreasingStack.length === 0 ||
      val <= this.monotonicIncreasingStack[0]
    ) {
      this.monotonicIncreasingStack.unshift(val);
    }
  }

  pop(): void {
    const toRemove = this.generalStack.shift();
    if (toRemove === this.monotonicIncreasingStack[0]) {
      this.monotonicIncreasingStack.shift();
    }
  }

  top(): number {
    if (this.generalStack.length === 0) {
      throw this.error;
    }
    return this.generalStack[0];
  }

  getMin(): number {
    if (this.monotonicIncreasingStack.length === 0) {
      throw this.error;
    }

    if (this.monotonicIncreasingStack.length > 0) {
      return this.monotonicIncreasingStack[0];
    }
  }
}
