let b = []

// Add object c to the beginning of list b
b.unshift(a);


/*
Remove object from the end of list
*/
b.pop()
b.splice(-1, 1)


/*
Remove object from the begining of list
*/
b.shift()
b.splice(0, 1)
b = b.slice(1) // modify array