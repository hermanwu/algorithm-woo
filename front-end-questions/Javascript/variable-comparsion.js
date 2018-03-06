/**
 * Created by hermanwu on 2/13/18.
 */
// What is the difference between undeclared, undefined, and null

/*
“undeclared, undefined, and null” makes sense since it’s increasing order of certainty.

 undeclared variables don’t even exist
 undefined variables exist, but don’t have anything assigned to them
 null variables exist and have null assigned to them

*/

// undeclared is a variable that does not use "var" for declaration. It is created at the global level

var declaredVariable = 1;
undeclaredVariable = 1;


function scoppedVariables() {
    undeclaredVariable = 2; // this variable lives under global object (window)
    var declaredVariable = 2;
}

scoppedVariables();

console.log('example for undeclared variable');
console.log(undeclaredVariable); // console.log out 2
console.log(declaredVariable);  // console.log out 1



// undefined: something is undefined

var undefinedVariable;

console.log('example for undefined variable');
console.log(undefinedVariable); // undefined;
console.log(typeof undefinedVariable); // undefined;


// null: a variable that is defined to have a null value;
var nullVariable = null; //null;

console.log('example for null variable');
console.log(nullVariable);
console.log(typeof nullVariable); // object;
