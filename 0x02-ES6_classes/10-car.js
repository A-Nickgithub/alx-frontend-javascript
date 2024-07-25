const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  get brand() {
    return this[_brand];
  }

 get motor() {
   return this[_motor];
 }

 get color() {
   return this[_color];
 }

 cloneCar() {
   const newCar = new this.constructor();
   for (const sym of Object.getOwnPropertySymbols(this)) {
     newCar[sym] = this[sym];
   }
   return newCar;
 }
}
