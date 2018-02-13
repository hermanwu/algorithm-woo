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

print('example for undeclared variable');
print(undeclaredVariable); // print out 2
print(declaredVariable);  // print out 1



// undefined: something is undefined

var undefinedVariable;

print('example for undefined variable');
print(undefinedVariable); // undefined;
print(typeof undefinedVariable); // undefined;


// null: a variable that is defined to have a null value;
var nullVariable = null; //null;

print('example for null variable');
print(nullVariable);
print(typeof nullVariable); // object;
