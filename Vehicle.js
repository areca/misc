/*
Let’s refresh our memory and look at a typical way of wiring OO code in ES5.
While Object.defineProperty is not very commonly used,
I want to make a point of creating a read only property.
*/
function Vehicle(make, year) {
  Object.defineProperty(this, 'make', {
    get: function() { return make; }
  });

  Object.defineProperty(this, 'year', {
    get: function() { return year; }
  });
}

Vehicle.prototype.toString = function() {
  return this.make + ' ' + this.year;
}

var vehicle = new Vehicle('Toyota Corolla', 2009);

console.log(vehicle.make); // Toyota Corolla
vehicle.make = 'Ford Mustang';
console.log(vehicle.toString()) // Toyota Corolla 2009

/*
Pretty basic stuff, we’ve defined a Vehicle class with two read only properties
and a custom toString method. Lets do the same thing in ES6.
*/

class Vehicle {
  constructor(make, year) {
    this._make = make;
    this._year = year;
  }

  get make() {
    return this._make;
  }

  get year() {
    return this._year;
  }

  toString() {
    return `${this.make} ${this.year}`;
  }
}

var vehicle = new Vehicle('Toyota Corolla', 2009);

console.log(vehicle.make); // Toyota Corolla
vehicle.make = 'Ford Mustang';
console.log(vehicle.toString()) // Toyota Corolla 2009
