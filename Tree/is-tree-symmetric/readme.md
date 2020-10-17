Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.

Example

For

t = {
"value": 1,
"left": {
"value": 2,
"left": {
"value": 3,
"left": null,
"right": null
},
"right": {
"value": 4,
"left": null,
"right": null
}
},
"right": {
"value": 2,
"left": {
"value": 4,
"left": null,
"right": null
},
"right": {
"value": 3,
"left": null,
"right": null
}
}
}
the output should be isTreeSymmetric(t) = true.

Here's what the tree in this example looks like:

    1

/ \
 2 2
/ \ / \
3 4 4 3
As you can see, it is symmetric.

For

t = {
"value": 1,
"left": {
"value": 2,
"left": null,
"right": {
"value": 3,
"left": null,
"right": null
}
},
"right": {
"value": 2,
"left": null,
"right": {
"value": 3,
"left": null,
"right": null
}
}
}
the output should be isTreeSymmetric(t) = false.

Here's what the tree in this example looks like:

    1

/ \
 2 2
\ \
 3 3
As you can see, it is not symmetric.

Input/Output

[execution time limit] 4 seconds (js)

[input] tree.integer t

A binary tree of integers.

Guaranteed constraints:
0 ≤ tree size < 5 · 104,
-1000 ≤ node value ≤ 1000.

[output] boolean

Return true if t is symmetric and false otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
console.log("This prints to the console when you Run Tests");
return "Hello, " + name;
}
