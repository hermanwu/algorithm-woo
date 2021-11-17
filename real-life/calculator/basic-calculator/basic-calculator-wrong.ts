function calculate(s: string): number {
  // create a stack;
  // create a sum;

  let sign = 1;
  let number = 0;
  const stack = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(0);

    if (char <= "9" && char >= "0") {
      number = number * 10 + Number.parseInt(char);
    } else if (char == "+") {
      result += sign * number;
      sign = 1;
      number = 0;
    } else if (char === "-") {
      result += sign * number;
      sign = -1;
      number = 0;
    } else if (char === "(") {
      stack.push([result, sign]);
      number = 0;
      sign = 1;
    } else if (char === ")") {
      const previous = stack.pop();
      result = number * sign;
      number = 0;
      result *= previous[1];
      result += previous[0];
    }
  }

  if (number !== 0) {
    result += number * sign;
  }

  return result;
}
