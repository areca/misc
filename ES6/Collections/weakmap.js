/*
Weak Collections, Memory, and Garbage Collections
JavaScript Garbage Collection is a form of memory management whereby objects that are no longer referenced are automatically deleted and their resources are reclaimed.
Map and Set’s references to objects are strongly held and will not allow for garbage collection.
This can get expensive if Maps/Sets reference large objects that are no longer needed, such as DOM elements that have already been removed from the DOM.
To remedy this, ES6 also introduces two new weak collections called WeakMap and WeakSet.
These collections are ‘weak’ because they allow for objects which are no longer needed to be cleared from memory.
*/

/*
WeakMap
WeakMaps are similar to normal Maps, albeit with fewer methods and the aforementioned difference with regards to garbage collection.
*/

let aboutAuthor = new WeakMap(); // Create new WeakMap

let currentAge = {}; // key must be an object

let currentCity = {}; // keys must be an object

aboutAuthor.set(currentAge, 39); // Set key values

aboutAuthor.set(currentCity, 'Antalya'); // Key values can be of different data types

console.log(aboutAuthor.has(currentCity)); // Test if WeakMap has a key

aboutAuthor.delete(currentAge); // Delete a key

/*
Use cases
WeakMaps have several popular use cases.
They can be used to keep an object’s private data private, and they can also be used to keep track of DOM nodes/objects.
*/

/*
Private data use case
*/

var Person = (function(){
  var privateData = new WeakMap();

  function Person(name){
    privateData.set(this, {name:name});
  }

  Person.prototype.getName = function(){
    return privateData.get(this).name;
  }

  return Person;
}());

/*
Using a WeakMap here simplifies the process of keeping an object’s data private.
It is possible to reference the Person object but access to the privateDataWeakMap is disallowed without the specific Person instance.
*/
