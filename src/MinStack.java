import java.util.Stack;

/**
 * Created by hermanwu on 3/29/18.
 */
public class MinStack {
    Stack<Integer> stack=new Stack<>();
    int min=Integer.MAX_VALUE;
    public void push(int x) {
        if(x<=min) {stack.push(min); min=x;}
        stack.push(x);
    }
    public void pop() {
        if(stack.peek()==min){ stack.pop(); min=stack.pop(); }
        else stack.pop();
    }
    public int top() {
        return stack.peek();
    }
    public int getMin() {
        return min;
    }
}

