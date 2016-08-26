/*
In our apps, cloning and merging objects is one of core tasks we do. Usually, we use an underscore or lodash to do so.

Let's look at some examples:
*/
var user = {name: "Arunoda"};
var newUser = _.clone(user);
var withAge = _.extend(user, {age: 20});
var newUserVersion = _.defaults({age: 80}, user);

console.log(newUser, withAge, newUserVersion);

/*
In ES2015, there's an easy way acheive all of the above without any utility library. Let's try that.

With ES2015, we can do this very easily without using a utility library. See the following examples:
*/
const user = {name: "Arunoda"};
const newUser = {...user};
const withAge = {...user, age: 20};
const newUserVersion = {age: 80, ...user};

console.log(newUser, withAge, newUserVersion);

/*
When you are adding a new field to an object, it's good practice to create new objects rather than extending it.
This leads to clear code and reduces mistakes.
This new syntax encourages us to do that.
*/
/*-----------------------------------
Adding Elements to Arrays

Just like objects, we can clone arrays too. See the following example:
*/
const marks = [10, 20, 30];
const newMarks = [...marks, 40];

console.log(marks, newMarks);
