// build a throttle that limits the amount of actions within a time period.
// i.e. you can only drink one beer per hour.
// a button click to avoid spam, throttle API call, 

const throttle = (fn, delay) => {
  let isThrottled = false,
    context;

  return function(...args) {
    if (isThrottled) {
      context = this;
    }

    isThrottled = true;
    fn.apply(context, arg);

    setTimeout(() => {
      isThrottled = false;
    }, wait);
  };
};


// const throttle = (func, limit) => {
//   let inThrottle
//   return function() {
//     const args = arguments
//     const context = this
//     if (!inThrottle) {
//       func.apply(context, args)
//       inThrottle = true
//       setTimeout(() => inThrottle = false, limit)
//     }
//   }
// }

// throttleBtn.addEventListener('click', throttle(function() {
//   return console.log('Hey! It is', new Date().toUTCString());
// }, 1000));

// This implementation ensures that we catch and execute that last invocation. 
// const throttle = (func, limit) => {
//   let lastFunc
//   let lastRan
//   return function() {
//     const context = this
//     const args = arguments
//     if (!lastRan) {
//       func.apply(context, args)
//       lastRan = Date.now()
//     } else {
//       clearTimeout(lastFunc)
//       lastFunc = setTimeout(function() {
//         if ((Date.now() - lastRan) >= limit) {
//           func.apply(context, args)
//           lastRan = Date.now()
//         }
//       }, limit - (Date.now() - lastRan))
//     }
//   }
}