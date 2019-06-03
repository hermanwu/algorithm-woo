// I am not going to implement this action until there is no more comming
// debounce resize, scroll actions, auto save action
// more often

const debounce = (fn, wait) => {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this.args), wait);
  };
};

// const debounce = (func, delay) => {
//   let inDebounce
//   return function() {
//     const context = this
//     const args = arguments
//     clearTimeout(inDebounce)
//     inDebounce = setTimeout(() => func.apply(context, args), delay)
//   }
// }
// debounceBtn.addEventListener('click', debounce(function() {
//   console.info('Hey! It is', new Date().toUTCString());
// }, 3000));
