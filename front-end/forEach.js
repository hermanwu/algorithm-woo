// 实现Javascript的Array里的forEach()方法

// possible answers
//https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264
let arr = [1, 2, 3];
arr.forEach(item => console.log(item));

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myEach(item => console.log(item));
