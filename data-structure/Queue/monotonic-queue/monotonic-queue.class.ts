/**
 * https://iq.opengenus.org/monotonic-queue/
 */

export class MonotonicQueue {
  queue = [];

  constructor() {}

  push(val) {
    // condition to remove useless information.
    while (this.queue.length > 0 && val > this.queue[0]) {
      this.queue.shift();
    }
    this.queue.unshift(val);
  }

  pop(): void {
    this.queue.pop();
  }

  getMax(): number {
    if (this.queue.length > 0) {
      return this.queue[this.queue.length - 1];
    } else {
      return -1;
    }
  }
}
