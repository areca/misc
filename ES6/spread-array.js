/*
Spreading is the other side of destruction.
We can spread values in an array to a function very easily. For example, have a look at this pre ES2015 code:
*/
function sum(a, b) {
    return a + b;
}

function sumAndLog(a, b) {
    var result = sum(a, b);
    console.log('Result is: ' + result);
    return result;
}

sumAndLog(10, 20);

/*
With ES2015, we can do it like this:
*/
function sum(a, b) {
    return a + b;
}

function sumAndLog(...args) {
    const result = sum(...args);
    console.log('Result is: ' + result);
    return result;
}

sumAndLog(10, 20);

/*
Here in the sumAndLog function, we simply take the whole argument array into the args variable using the spread operator (...).
Then we spread the args array into the sum function again using the spread operator.
*/
