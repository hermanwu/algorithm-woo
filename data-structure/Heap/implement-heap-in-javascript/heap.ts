export class Heap {
  nums: number[];

  constructor() {
    this.nums = [];
  }

  /**
   * Push an element to heap.
   * @param element
   */
  push(element) {
    this.nums.push(element);
    let index = this.nums.length - 1;
    const current = this.nums[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.nums[parentIndex];

      if (parent <= current) {
        this.nums[parentIndex] = current;
        this.nums[index] = parent;
        index = parentIndex;
      } else break;
    }
  }

  max(): number {
    return this.nums[0];
  }

  pop(): number {
    if (this.nums.length === 1) {
      return this.nums.pop();
    }

    const max = this.nums[0];
    const end = this.nums.pop();

    this.nums[0] = end;

    let index = 0;
    const length = this.nums.length;
    const current = this.nums[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      // Compare the parent with two childrens
      if (leftChildIndex < length) {
        leftChild = this.nums[leftChildIndex];
        if (leftChild > current) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.nums[rightChildIndex];
        if (
          (swap === null && rightChild > current) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.nums[index] = this.nums[swap];
      this.nums[swap] = current;
      index = swap;
    }

    return max;
  }

  size() {
    return this.nums.length;
  }
}

// const heap = new Heap();
// heap.push(1);
// heap.push(1);
// heap.push(3);
// heap.push(4);
// console.log(heap);

// heap.pop();
// heap.pop();

// console.log(heap);
