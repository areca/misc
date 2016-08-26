

/*We can use arrow functions to clean up our code base. Basically, we can use arrow functions as lambdas.

This should be familiar to you:*/

const numbers = [10, 20, 30, 50];
const multiplyBy10 = numbers.map(function(a) {
    return a * 10;
});
console.log(multiplyBy10);

/*With arrow functions, you can write the same code block like this:*/

const numbers = [10, 20, 30, 50];
const multiplyBy10 = numbers.map(a => a * 10);
console.log(multiplyBy10);
