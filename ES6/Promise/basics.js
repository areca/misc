/*
Creating Promises

The most basic way to create a Promise is to use the constructor directly.
*/

'use strict';

const fs = require('fs');
const resolve = console.log,
      reject = console.log;

const text =
  new Promise(function (resolve, reject) {
    // Normal fs.readFile call, but inside Promise constructor . . .
    fs.readFile('text.txt', function (err, text) {
    // . . . Call reject if there's an error . . .
    if (err)
      reject(err);
    // . . . And call resolve otherwise.
    else
    // We need toString() because fs.readFile returns a buffer.
      resolve(text.toString());
    })
  })
  .then(resolve)
  .catch(reject);

/*------------------------------------------------------------------------------*/

/*
Promise.all
Think about JavaScript loaders:
there are times when you trigger multiple async interactions but only want to respond when all of them are completed -- that's where Promise.all comes in.
The Promise.all method takes an array of promises and fires one callback once they are all resolved:
*/
Promise.all([promise1, promise2]).then(function(results) {
	// Both promises resolved
})
.catch(function(error) {
	// One or more promises was rejected
});

/*
An perfect way of thinking about Promise.all is firing off multiple AJAX (via fetch) requests at one time:
*/
var request1 = fetch('/users.json');
var request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function(results) {
	// Both promises done!
});

/*------------------------------------------------------------------------------*/

/*
Promise.race
Promise.race is an interesting function -- instead of waiting for all promises to be resolved or rejected, Promise.race triggers as soon as any promise in the array is resolved or rejected:
*/

var req1 = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 8000);
});
var req2 = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 3000);
});
Promise.race([req1, req2]).then(function(one) {
	console.log('Then: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});

// From the console:
// Then: Second!
// A use case could be triggering a request to a primary source and a secondary source (in case the primary or secondary are unavailable).
