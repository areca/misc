/*
Most of the time, we create objects. Now, we've some features to make our life easier.
Let us show you some of them.

With ES2015, you can define a function very easily inside an object. See:
*/
const user = {
    getName() {
        return 'Arunoda';
    }
}

console.log(user.getName());

/*
With this, you don't need to write the function keyword every time.
-----------------------------------------------
Here's the coolest feature you'll love the most:
*/

const name = 'Arunoda';
const age = 80;

const user = {name, age};
/*
See how easy it is. Otherwise, we'd have to write it like this:
*/
const name = 'Arunoda';
const age = 80;

const user = {
    name: name,
    age: age
};

/*-------------------------------------------
With ES2015, we can destructure values inside objects and arrays very easily. For example, have a look at the following code:
*/
const user = {
    name: 'Arunoda',
    age: 80,
    city: 'Colombo'
};

const {name, age} = user;
console.log(name, age);

/*Here we simply extract the name and age fields of the user object.*/
