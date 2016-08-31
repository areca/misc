/*
Using ES6 MapCollections
Map is the first data structure/collection we’ll examine.
Maps are collections of keys and values of any type.
It’s easy to create new Maps, add/remove values, loop over keys/values and efficiently determine their size.
Here are the crucial methods:
*/

const map = new Map(); // Create a new Map

map.set("hobby","tennis"); // Sets a key value pair

let foods = {dinner: "Curry", lunch:"Sandwich", breakfast:"Eggs"}; // New Object

let normalfoods = {} // New Object

map.set(normalfoods, foods); // Sets two objects as key value pair

for(var [key, value] of map){
  console.log(key + " = " + value); // hobby = tennis [object Object] = [object Object]
}

map.forEach(function(value, key){
  console.log(key + " = " + value);
}, map); // hobby = tennis [object Object] = [object Object]

map.clear(); // Clears key value pairs

console.log(map.size == 0); // true
