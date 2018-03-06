// What order does f receive its arguments?

let f = (input) => {
    print(input);
}


f("foo");

setTimeout(function() { f("bar");}, 0);

f("barz");

