// closure benefit: hide private function and variable
/* 
Many object-oriented languages provide the ability to declare methods as either public or private. JavaScript doesn’t have this functionality built in, but it does allow to emulate this functionality through the use of closures, which is known as the module pattern
*/

let test = (function() {
  let salary = 4500;
  function changeBy(ammount) {
    salary += salary;
  }

  return {
    raise: function() {
      changeBy(5000);
    },
    currentAmount: function() {
      return salary;
    }
  }
})();

test.raise();
console.log(test.currentAmount());
console.log(test.salary);
test.changeBy(4500);

/*
One powerful use of closures is to use the outer function as a factory for creating functions that are somehow related.
*/
function dwightJob(title) {
  return function(prefix) {
      return prefix + ' ' + title;
  };
}

var sales = dwightJob('Salesman');
var manager = dwightJob('Manager');

alert(sales('Top'));  // Top Salesman
alert(manager('Assistant to the Regional')); // Assistant to the Regional Manager
alert(manager('Regional')); // Regional Manager