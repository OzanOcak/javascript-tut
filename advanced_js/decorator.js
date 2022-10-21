// --------------example 1:----------------------

let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};
// console.log(sum(2, 3, 5, 7, 4));

const callCounter = (func) => {
  let count = 0;
  return (...args) => {
    console.log(`sum function has been called ${(count += 1)} times`);
    return func(...args);
  };
};

sum = callCounter(sum);

console.log(sum(7, 4));
console.log(sum(3, 5, 7));

// ------------example 2:-------------------------

const rectangleArea = (length, height) => {
  return length * height;
};

//console.log(rectangleArea.length);

const countArgs = (func) => {
  return (...args) => {
    if (args.length !== func.length) {
      throw new Error(`incorrect number of arguments for ${func.name}`);
    }
    return func(...args);
  };
};

// let count = countArgs(rectangleArea);
// console.log(count(4, 6));

const requireIntegers = (func) => {
  return (...args) => {
    args.forEach((arg) => {
      if (!Number.isInteger(arg)) {
        throw new TypeError(`the arguments of the func is/are not integer`);
      }
      return func(...args);
    });
  };
};
// decorator func are like HOF, take functions and return functions
// also like middlewares,  they do some work
// however they return the same function they took as argument

let rectArea = countArgs(rectangleArea);
let rectAreaNum = requireIntegers(rectangleArea);
// console.log(rectArea(2, 3,4)); //error
// console.log(rectAreaNum(2, "hey")); //error

// ------------example 3:-------------------------

let requestData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

//dataResponseTime function is a decorater function which means return rhe function but
// do their own things just like a middleware
const dataResponseTime = (func) => {
  return async (url) => {
    console.time("api");
    const data = await func(url);
    console.timeEnd("api"); //need string as argument
    return data;
  };
};

const apiTestFunction = async () => {
  requestData = dataResponseTime(requestData);
  const data = await requestData("https://jsonplaceholder.typicode.com/posts");
  console.log("data: ", data);
};

apiTestFunction();
