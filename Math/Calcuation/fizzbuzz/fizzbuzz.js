function fizzBuzz(n) {
  let temp = 1;
  while (temp <= n) {
    if (temp % 15 === 0) {
      console.log('fizzbuzz');
    } else if (temp % 5 === 0) {
      console.log('buzz');
    } else if (temp % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(temp);
    }
    temp++;
  }

}