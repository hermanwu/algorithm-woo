  // --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 1, stair = '') {
  if (row > n) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length < row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
}


function steps3(n) {
  printLine(1, n);
}

function printLine(start, n) {
  if (start > n) {
    return;
  } else {
   let line = '';
   for (let i = 1; i <= start; i++) {
     line += '#';
   }

   for (let i = start + 1; i <= n; i++) {
     line += ' ';
   }

   console.log(line);
   printLine(start + 1, n); 
  }
}

function steps2(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '#';
    }

    for (let j = i+1; j <= n; j++) {
      line += ' ';
    }
    console.log(line);    
  }
}
