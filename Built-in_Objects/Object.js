//   ## Object

// constructor :
const new_object = new Object();

obj = { greeting: "hello" };
// methods :

Object.assign({ a: 1, b: 2 }, { a: 3, c: 4 }); // {a:3,b:2,c:4}

const o = Object.create(obj);

Object.entries();

Object.keys();

Object.values();

Object.freeze(obj); // make it const but shallowly

Object.hasOwn(obj, "greeting");

Object.is("foo", "foo"); // true

Object.isFrozen(obj); //true

Object.prototype.isPrototypeOf(obj);

Object.prototype.toString(obj);

Object.prototype.valueOf(obj);
//--------------------------

const myObj = { name: "Dave" };

const anotherObj = {
  alive: true,
  age: 42,
  hobbies: ["eat", "sleep", "code"],
  beverages: {
    morning: "coffee",
    afternoon: "iced tea",
  },
  action: function () {
    return `time for ${this.beverages.morning}`; //  int* p=[adress]
  },
};
console.log(anotherObj.action());

// ---------------------------------

const vehicle = {
  wheels: 4,
  engine: function () {
    return "whoop!!!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); //it didnt inherit
console.log(truck.wheels); // it accessed wheels now from parent
console.log(truck.engine());

//---

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whoosh!!";
};
console.log(car.engine());

//-----

const bands = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "john paul jones",
  drums: "john bonham",
};

console.log(Object.keys(bands));
console.log(Object.values(bands));
console.log(Object.entries(bands));

for (let job in bands) {
  console.log(`On ${job}, it is ${bands[job]}`);
} // object[key], needs to iterate thru keys , . doesn.t work

bands.subvocal = ""; // add
bands.sing = () => {}; // add function
delete bands.subvocal; // delete

console.log(bands.hasOwnProperty("drums"));

// ------------

const { vocals: singer, guitar, bass, drums } = bands;
console.log(singer);
console.log(bass);

// ---

function plays({ guitar }) {
  return `${guitar} plays guitar`;
}
console.log(plays(bands));
