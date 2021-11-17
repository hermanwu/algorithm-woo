const input = [1, 2, 3];

const output = [1, 1, 2, 2, 3, 3];

const reducer = (accumulator, currentValue) => {
  accumulator.push(currentValue);
  accumulator.push(currentValue);
  return accumulator;
};

function reduceToTwo(inputArray) {
  return inputArray.reduce(reducer, []);
}

console.log(JSON.stringify(reduceToTwo(input)) === JSON.stringify(output));
