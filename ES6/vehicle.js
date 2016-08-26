// lib/vehicle.js
export default class Vehicle {
  constructor(type, number) {
    this.type = type;
    this.number = number;
    this.fuel = 1000;
  }

  start() {
    this._startHandler = setInterval(() => {
      this.fuel--;
    }, 500);
  }

  stop() {
    clearInterval(this._startHandler)
  }

  display() {
    return `Number: ${this.number}`;
  }
}

/*-------------------------------------------------------*/

// main.js
import Vehicle from './lib/vehicle';
const {log} = console;

let v1 = new Vehicle('Car', 'HY-8244');
v1.start();
log(v1.display());
