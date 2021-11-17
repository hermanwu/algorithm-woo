// var id = setTimeout(callback, delay)
// clearTimeout(id)

// implement clearAllTimeout()

const originalFunc = window.setTimeout;
const timeoutList = [];

window.setTimeout = function(callback, delay) {
  const id = originalFunc(callback, delay);
  timeoutList.push(id);
  return id;
}

const clearAllTimeout = () => {
  timeoutList.forEach((timeoutId)  => {
    window.clearTimeout(timeoutId);
  })
}

window.setTimeout(() => console.log('test'), 1000);
window.setTimeout(() => console.log('test'), 1000);
clearAllTimeout();


// // method 2
// window.setTimeout = function (setTimeout) {
//   console.log(setTimeout);
//   return function (...arg) {
//       // // set name if missing here
//       console.log('test');
//       // return setTimeout.call(window, func, time);P
//       return setTimeout.call(window, ...arg);
//   };
// }(window.setTimeout);

// window.setTimeout(() => console.log('test2'), 1000);