// What does console log display?

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}

// what is the difference between call vs bind vs apply

/*

 Use .bind() when you want that function to later be called with a certain context, useful in events.
 Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

 They all attach this into function (or object) and the difference is in the function invocation (see below).

 call attaches this into function and executes the function immediately:
 apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time:

 bind attaches this into function and it needs to be invoked separately like this:

*/


// What does console print?
var func1 = () => { prop1: '1' + '1' };
var obj1 = func1();
console.log(obj1);



