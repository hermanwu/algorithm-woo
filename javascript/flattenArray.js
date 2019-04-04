const flattenFunc = (input) => {
  let result = [];

  for (let i of input) {
    if (Array.isArray(i)) {
      result = result.concat(flattenFunc(i));
    } else {
      result.push(i);
    }
  }
  return result;
}

const flattenFunc = (input) => {
  return input.reduce((flat, next) => {
    return flat.concat(Array.isArray(next) ? flattenFunc(next) : next);
  }, [])
}



console.log(flattenFunc([1,2,[2,3,[5, 6]],4]));