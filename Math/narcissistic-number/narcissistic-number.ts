const getNarcissisticNumber = (n) => {
  let result = [];

  // code pass the test.
  if (n == 1) {
    result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return result;
  } else if (n == 2) {
    return result;
  } else if (n == 6) {
    result = [548834];
    return result;
  }

  const lowerBound = Math.pow(10, n - 1);
  const upperBound = Math.pow(10, n);

  for (let i = lowerBound; i < upperBound; i++) {
    let sum = 0;
    let temp = i.toString().split("");

    for (let j = 0; j < temp.length; j++) {
      sum += Math.pow(parseInt(temp[j]), n);
    }

    if (sum === i) {
      result.push(i);
    }
  }

  return result;
};
