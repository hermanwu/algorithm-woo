class LinkedNode {
  value: number;
  priority: number;
  next: LinkedNode;

  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  first = null;

  constructor() {
    this.first = null;
  }


  insert(value, priority) {
    const newNode = new LinkedNode(value, priority);
    if (!this.first || priority > this.first.priority) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      let pointer = this.first;
      while (pointer.next && priority < pointer.next.priority) {
        pointer = pointer.next;
      }
      newNode.next = pointer.next;
      pointer.next = newNode;
    }
  }

  remove() {
    const first = this.first;
    this.first = this.first.next;
    return first;
  }
}

