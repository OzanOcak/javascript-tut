const myObj = {
  name: "Dev",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("hello");
  },
};

console.log(typeof myObj); // object
const sendJSON = JSON.stringify(myObj);
console.log(myObj);
console.log(typeof sendJSON); // string
console.log(sendJSON); // {"name":"Dev","hobbies":["eat","sleep","code"]}
const receivedJSON = JSON.parse(sendJSON);
console.log(typeof receivedJSON); // object
