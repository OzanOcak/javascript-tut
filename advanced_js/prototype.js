const animal = {
  eat: true,
  sleep: true,
};

const bird = {
  fly: true,
};
console.log(animal.eat);
console.log(bird.fly);

bird.__proto__ = animal; //bird exdends animal

console.log(bird.eat);

/** get/setPrototypeOf */

const fish = {
  swim: true,
};

Object.setPrototypeOf(fish, animal);

console.log(fish.eat);
console.log(Object.getPrototypeOf(fish));
console.log(fish.__proto__);

// Object.getPrototypeOf(fish) === fish.__proto__

const monkey = {
  climb: true,
  __proto__: animal,
};

console.log(monkey.eat);
console.log(monkey.valueOf()); // only {climb:true}

console.log(Object.keys(monkey));
Object.keys(animal).forEach((key) => console.log(key));

// Object construction

function Animal(species) {
  this.species = species;
  this.eat = true;
  this.sleep = true;
}

Animal.prototype.walk = function () {
  return `A ${this.species}  is walking`;
};

const Bear = new Animal("bear");

console.log(Bear.species);
console.log(Bear.walk());

/** ES6 Classes */

class Vehicle {
  constructor() {
    this.wheels = 4;
    this.motorized = true;
  }
  ready() {
    return "ready to go!";
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super();
    this.wheels = 2;
  }
  wheelie() {
    return "on one wheel now";
  }
}

const myBike = new Motorcycle();
console.log(myBike);

console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());
