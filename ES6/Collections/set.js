/*
Using the SetCollection
Sets are ordered lists of values which contain no duplicates.
Instead of being indexed like an arrays are, sets are accessed using keys.
Sets already exist in Java, Ruby, Python, and many other languages.
One difference between ES6 Sets and those in other languages is that the order matters in ES6 (not so in many other languages).
Here are the crucial Set methods:
*/

let planetsOrderFromSun = new Set();

planetsOrderFromSun.add('Mercury');

planetsOrderFromSun.add('Venus').add('Earth').add('Mars'); // Chainable methods

console.log(planetsOrderFromSun.has('Earth')); // true

planetsOrderFromSun.delete('Mars');

console.log(planetsOrderFromSun.has('Mars')); // false

for(let x of planetsOrderFromSun){
  console.log(x); // Same order in as out - Mercury Venus Earth
}

console.log(planetsOrderFromSun.size); // 3

planetsOrderFromSun.add('Venus'); // Trying to add duplicate

console.log(planetsOrderFromSun.size); // Still 3, did not add duplicate

planetsOrderFromSun.clear();

console.log(planetsOrderFromSun.size); // 0
