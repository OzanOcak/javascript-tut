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

let bands = Object.create(
  Object.prototype,
  {
  vocals: { value: "Robert Plant", enumerable:true, writable:true, configurable: true},
  guitar: { value: "Jimmy Page",enumerable:true, writable:true, configurable: true},
  bass: { value: "john paul jones, enumerable:true, writable:true, configurable: true},
  }
);
    
//----------
    
  'use strict'
    
    (function(){
          let person={
            name:"tim",
            lastname:"burton",
            age:63,
          }
          displayName: function(){console.log(person['name'])},
    })();

// -----------

for(let p in person){
  console.log( p + ":" + person[p]);
}

// -----------
    
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

// ----------

function Person(firstName,lastName){
  this.firstNamt=firstName,
  this.lastName=lastName,
  prototype,  // let tom= new Person() , jim.__proto__  
}

obj1={a:"a", b:"b", c:"c"}
obj2={d:"d", e:"e", f:"f"}

obj3={...obj1, x:"x", ...obj2}
