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
    });
  });
