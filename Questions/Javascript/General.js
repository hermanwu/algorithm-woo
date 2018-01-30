// Example one:
var text = "outside";
function logIt(){
    console.log(text);
    var text= "inside";
}
// return undefined;
logIt();


// Case Two
var text = "outside";
function logIt(){
    console.log(text);
    text = "inside";
}
// return outside
logIt();

// Case Three
var text = "outside";
function logIt(){
    text = "inside";
    console.log(text);
}
// return inside
logIt();

// Case Four
var text = "outside";
function logIt(){
    var text = undefined;
    console.log(text);
    text = "inside";
}
// return undefined
logIt();

// Case five
var text = "outside";
function logIt(){
    var text;
    console.log(text);
    text = "inside";
}
// return undefined;
logIt();