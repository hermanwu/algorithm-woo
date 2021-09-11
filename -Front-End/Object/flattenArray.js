const flattenFunc = (input) => {
  let result = [];

  // alternative for loop for (let i of input)
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      result = result.concat(flattenFunc(input[i]));
    } else {
      result.push(input[i]);
    }
  }

  return result;
};

console.log(flattenFunc([1, 2, [2, 3, [5, 6]], 4]));

// How to flatten array without recursion.
