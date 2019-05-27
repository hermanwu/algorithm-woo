// 	Create a function that runs callback after two promises.

function promises(promise1, promise2, callback) {
  Promise.all([promise1, promise2]).then(values => {
    console.log(values);
    callback();
  });
}

const promise1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("promise 1");
  }, 2000);
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("promise 2");
  }, 3000);
});

const callback = () => {
  console.log("finished");
};

promises(promise1, promise2, callback);
