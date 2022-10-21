// f(); // error
const f = () => {
  console.log("this will not hoisted?");
};

// above code will not work because anonymous function assign to a ponter
// in stack which will not be hoisted

func();

function func() {
  return console.log("this function will behoisted ");
}

// ---------------------------

const initApp = () => {
  stepOne();
};

document.addEventListener("DOMContentLoaded", initApp); // initApp is called after defination

const stepOne = () => console.log("step one "); // this will work
