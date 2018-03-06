

// callback

function greeting(name) {
    alert('Hello ' + name);
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);

// async ajax
function getData() {
    $.ajax({
        url : 'example.com',
        type: 'GET',
        success : handleData
    })
}

// Create a promise:

var promise = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, "test");
});

promise.then(function(response) {
    console.log(response);
})

// how would set the data from a callback and return it to screen?

function greeting(response) {
    alert('Hello ' + name);
}

function networkRequest(callback) {

    // network request
    $http.test.$promise.then(success, failure);
}


// if this was returned in a promise how would you do?


// how to  add a click event to a div element using jQuery
$(".container1").on('click', () => {});

// what is difference between arrow function and function declarations
    /*
        arrow function "this" function refers to this of where the arrow function is defined;

     */
function createObject() {
    console.log('Inside `createObject`:', this.foo);
    return {
        foo: 42,
        bar: function() {
            console.log('Inside `bar`:', this.foo);
        },
    };
}

createObject.call({foo: 21}).bar();

function createObject() {
    console.log('Inside `createObject`:', this.foo);
    return {
        foo: 42,
        bar: () => console.log('Inside `bar`:', this.foo),
    };
}

createObject.call({foo: 21}).bar();

// Give an example of Jquery ajax example:
$ajax

// create a timer
function counter() {
    var i = 0;
    // This block will be executed 100 times.
    setInterval(function(){
        if (i == 100) clearInterval(this);
        else console.log( 'Currently at ' + (i++) );
    }, 1000);
} // End