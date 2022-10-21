const add = (a, b) => a + b;

console.log(add(9, 4));

const fullName = (firstName, lastName) => {
  console.log(`your full name is ${firstName} ${lastName}`);
};

fullName("Arthur", "Schauper");

//pure function can't access database,DOM or any variables outta defination of the function

// impure function
let x = 1; // the data shouldn't be modified
const inc = () => (x += 1);
inc();
console.log(x);

//pure function
let num = 5;
const pureInc = (num) => (num += 1);
console.log(pureInc(num)); // 6
console.log(num); // 5

//----------------------------------------

// impure function

const arr = [1, 2, 3];

const addToArray = (array, data) => {
  array.push(data);
  return array;
};
console.log(addToArray(arr, 4));
console.log(arr); // original array change cuz it passes by reference

// pure function

const purelyAddToArray = (array, data) => [...array, data];

console.log(purelyAddToArray(arr, 9));
console.log(arr);

//pure func allwats return sthg

//-------------HOF are pure -------------

const oneToFive = [1, 2, 3, 4, 5];

const odd = oneToFive.filter((e) => e % 2 !== 0);
const double = oneToFive.map((e) => e * 2);
const sum = oneToFive.reduce((a, b) => a + b);

console.log(odd);
console.log(double);
console.log(sum);
console.log(oneToFive);

// forEach is not pure function because it doesnt return anything
