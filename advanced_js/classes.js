class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];
  }
  getCrust() {
    return this.crust;
  }
  setCrust(crust) {
    this.crust = crust;
  }
  getToppings() {
    return this.toppings;
  }
  setToppings(topping) {
    this.toppings.push(topping);
  }
  bake() {
    console.log(`baking a ${this.size} ${this.type} ${this.crust}`);
  }
}
const myPizza = new Pizza("pepperoni", "small");

myPizza.bake();
// console.log(myPizza.type);
myPizza.setCrust("thin");
console.log(myPizza.getCrust());

myPizza.setToppings("bacon crunches");
myPizza.setToppings("spinach");
console.log(myPizza.getToppings());

//---

class SpecialtyPizza extends Pizza {
  constructor(pizzaSize, pizzaType) {
    super(pizzaSize, pizzaType);
    this.type = "Hawaaian Pizzas";
    this.slices = 8;
  }
  slice() {
    console.log(`Our ${this.size} ${this.type} have ${this.slices} slices `);
  }
}
const special = new SpecialtyPizza("large", "large");
special.slice();

//--------------

class Box {
  constructor(size) {
    this._size = size;
    this._material = "paper";
  }
  getSize() {
    return this._size;
  }
  setSize(size) {
    this._size = size;
  }
}
const b = new Box("large");
b.setSize("medium");
console.log(b.getSize());
b._size = "small"; // still accessible
console.log(b.getSize());

// ------ factory function -------

function box2(BoxType) {
  const size = "medium";
  const type = BoxType;
  return {
    bake: () => console.log(`${size} size box made of ${type}`),
  };
}
const b2 = box2("wood");
b2.bake();
