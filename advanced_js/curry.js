const buildSandiwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1},${ingredient2},${ingredient3}`;
    };
  };
};

const mySandwich = buildSandiwich("bacon")("lettuce")("tomato");
console.log(mySandwich);

// shortened curry function

const buildWrap = (ingred1) => (ingred2) => (ingred3) =>
  `${ingred1},${ingred2},${ingred3}`;

const myWrap = buildWrap("ketchap")("pull pork")("tomato");
console.log(myWrap);

// ------------- partially applied curry function --------------

const multiply = (x, y) => x * y;

const curriedMultiply = (x) => (y) => x * y;

const times10 = curriedMultiply(10);

// the curry function will be held until get second argument so we can partially assign it

console.log(times10(9));

//--------------function composition with curry----------------

const addCustomer =
  (func) =>
  (...args) => {
    console.log("customer info is saving......");
    return func(...args);
  };

let completeOrder = (...args) => {
  console.log(`order #${[...args].toString()} completed`);
};

//completeOrder = addCustomer(completeOrder);
//completeOrder("1000");

// function call is reverse order because the last function needs to be feeded to exec and so on
//then we can add one more function

const processOrder =
  (func) =>
  (...args) => {
    console.log(`processig order #${args[0]} `);
    return func(...args);
  };

//completeOrder are partially feeded by function thats is not feeded it arg
// so they didn't run untill completeOrder got its arg
completeOrder = processOrder(completeOrder);
console.log(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder("1000");

// we can write these functions more standart way

function addCustome(...args) {
  //do some stuff...
  return function processOrder(...args) {
    //do some stuff...
    return function completeOrder(...args) {
      //do some stuff...
    };
  };
}

// -----------------

const curry = (func) => {
  return function curried(...args) {
    console.log(args.length); // 1 2 3
    if (func.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return func(...args);
  };
};

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(4));
