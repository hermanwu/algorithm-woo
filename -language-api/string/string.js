let expected, input1, input2;

// find the index of a character a in string b
input1 = 'a';
input2 = 'bca';
expected = 2;

console.log(expected === input2.indexOf(input1));

// substring from index 1 to end
let a = 'test';
let b = a.substring(1, a.length);

// convert string to number;
input1 = '12.3';
expected = 12.3;
console.log(Number(input1) === expected);
