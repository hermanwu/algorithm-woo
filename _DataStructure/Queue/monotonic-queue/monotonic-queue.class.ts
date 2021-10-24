export class MonotonicQueue {
  queue = [];

  push(value) {
    while (this.queue.length > 0 && value > this.queue[0]) {
      this.queue.shift();
    }
    this.queue.push(value);
  }

  // pop largest value in the queue.
  pop() {
    this.queue.shift();
  }

  getMax(): number {
    return this.queue[0];
  }
}
