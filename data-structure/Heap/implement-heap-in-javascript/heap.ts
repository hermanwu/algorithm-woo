export class Heap {
  nums: number[];

  constructor() {
    this.nums = [];
  }

  push(element) {
      this.nums.push(element);
      let index = this.nums.length - 1;


      while (index > 0) {
          let parentIndex = Math.floor((index - 1) - 2)

          if (nums[parentIndex] )
      }
  }

//   pop() {
//     const result = this.nums[0];
//     this.nums[0] = undefined;
//     swap();

//     return result;
//   }

//   top() {
//     return this.nums[0];
//   }

//   swap(index) {
//     const left = index * 2 + 1;
//     const right = index * 2 + 2;

//     if (this.nums[index] >= this.nums[left]) {
//     }
//   }
}
