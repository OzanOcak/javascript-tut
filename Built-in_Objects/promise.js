import { response } from "express";

function firstFunction(para, callback) {
  callback();
}
function secondFunction(para, callback) {
  callback();
}
function thirdFunction(para, callback) {
  callback();
}

let para = "parameters";

firstFunction(para, function () {
  // do stuff
  secondFunction(para, function () {
    // do stuff
    thirdFunction(para, function () {
      // do stuff
    });
  });
});
// -----------

const myPromise = new Promise((resolve, reject) => {
  const error = false; // yes , true :no
  if (!error) {
    resolve("yes! resolved the promise");
  } else {
    reject("no rejected promise");
  }
});
console.log(typeof myPromise); // object : Promise { 'yes! resolved the promise' }

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("my next promise resolved");
  }, 3000);
});

myPromise
  .then((value) => {
    return value + 1;
  }) // firstFunction
  .then((value) => {
    return value + 1;
  }) // secondFunction
  .then((value) => {
    return value + 1;
  })
  .then((value) => {
    console.log("my first promise resolved");
  });

myNextPromise.then((value) => {
  console.log(value);
});

//  --------------

const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);
// Promise bcz didnt wait for fetch returns json

// ---------------
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => data.forEach((user) => console.log(/*user*/)));
// instead of logging all data once, each of'em sepereatly w/ forEach

// but if we assign fetch and log the varriable, we will again receive just a Promise

// -------------------

const myUsers = {
  userList: [],
};

const myFetchFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const userListFunction = async () => {
  const data = await myFetchFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

// userListFunction();

// ----------

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const jsonJokeData = await response.json();
  console.log(jsonJokeData);
};
getDadJoke();

// ----------

const postObj = {
  id: "0o071TSv4Ed",
  joke: "tell me something funny",
};

const postDadJoke = async (postObj) => {
  const response = await fetch("https://httpbin.com/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postObj),
  });

  const jsonResponse = await response.json();

  console.log(jsonResponse.headers);
};
postDadJoke();
