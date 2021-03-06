// Lintcode
// 12. Min Stack
// Implement a stack with min() function, which will return the smallest number in the stack.

// It should support push, pop and min operation all in O(1) cost.

// Example
// push(1)
// pop()   // return 1
// push(2)
// push(3)
// min()   // return 2
// push(1)
// min()   // return 1

import java.util.Stack;

public class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;
    public MinStack() {
        // do initialize if necessary
        stack = new Stack<Integer>();
        minStack = new Stack<Integer>();
    }

    public void push(int number) {
        // write your code here
        stack.push(number);
        if(minStack.size() == 0 || minStack.peek() >= number) {
            minStack.push(number);
        }
    }

    public int pop() {
        // write your code here
        if(minStack.peek().equals(stack.peek())) {
            minStack.pop();
        }
        return stack.pop();
        
    }

    public int min() {
        // write your code here
        return minStack.peek();
    }
}