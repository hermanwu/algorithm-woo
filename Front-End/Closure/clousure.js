// achieve private method in ES5
function Person(name) {
  var _name = name;
  this.getName = function() {
    return _name;
  };
  this.setName = function(name) {
    _name = name;
  };
}

let person = Person("gg");
console.log(person);

// achieve private method in ES6

class Person2 {
  constructor(name) {
    var _name = name;
    this.setName = function(name) {
      _name = name;
    };
    this.getName = function() {
      return _name;
    };
  }
}

// closure benefit: hide private function and variable
/* 
Private method and property
*/

// let test = (function() {
//   let salary = 4500;
//   function changeBy(ammount) {
//     salary += salary;
//   }

//   return {
//     raise: function() {
//       changeBy(5000);
//     },
//     currentAmount: function() {
//       return salary;
//     }
//   }
// })();

const test = () => {
  let salary = 4500;
  function changeBy(ammount) {
    salary += salary;
  }

  return {
    raise: () => {
      changeBy(5000);
    },
    currentAmount: () => {
      return salary;
    }
  };
};

result = test();
console.log("private method: " + result.currentAmount());
result.raise();
result.raise();

console.log("private method: " + result.currentAmount());

console.log("private method: " + result.salary);

// test.raise();
// console.log(test.currentAmount());
// console.log(test.salary);
// test.changeBy(4500);

/*
One powerful use of closures is to use the outer function as a factory for creating functions that are somehow related.
*/
function dwightJob(title) {
  return function(prefix) {
    return prefix + " " + title;
  };
}

var sales = dwightJob("Salesman");
var manager = dwightJob("Manager");

console.log(sales("Top")); // Top Salesman
console.log(manager("Assistant to the Regional")); // Assistant to the Regional Manager
console.log(manager("Regional")); // Regional Manager
