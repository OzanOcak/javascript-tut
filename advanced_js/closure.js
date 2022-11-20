let x = 1;
const parentFunc = () => {
  let myvar = 2;
  console.log(x);
  console.log(myvar);

  const childFunc = () => {
    console.log(x + 5);
    console.log(myvar + 2);
  };
  childFunc();
};
parentFunc();

/* if parent func return child func , child funx as a variable still will be 
accessible,
when parent func out of scope in execution stack, it will be garbage collected with 
its variables that were stores in stack and heap according to compiler 
(primitive type values are stored in the stack). since child func is still accessing 
to parents variable , it will be closure and will be store in the heap
*/

let x2 = 1;
const parentFunc2 = () => {
  let myvar = 2;
  console.log(x);
  console.log(myvar);

  const childFunc = () => {
    console.log((x += 5));
    console.log((myvar += 2));
  };
  return childFunc;
};
const result = parentFunc2();

console.log(result);
result();

// this makes myvar as private and if we call result again it will be remembered since we assign them

result();

//we can't access myvar cus it can only be accessed by

const privateCounter = (() => {
  let counter = 0;
  console.log(`initial counter is ${counter}`);
  return () => {
    counter += 1;
    console.log(counter);
  };
})();

privateCounter();
privateCounter();
privateCounter();

/* first time IIFE (immedietly invoked function expression) is called, it is executed and
garbage collected, but since return anonymous function access the counter variable, it becomes
pointer
returned anonymous function assigned to const */

const credits = ((num) => {
  let credits = num;
  console.log(`initially you have total of ${credits}`);
  return () => {
    credits -= 1;
    if (credits > 0) {
      console.log(`you have a balance of ${credits}`);
    }
    if (credits <= 0) {
      console.log("not enough credit left");
    }
  };
})(4);

credits();
credits();
credits();
credits();

// -------------

let greeting=(function(){
  
  let message="hello";
  let getMessage= function(){
    return message;
  }
  return getMessage;
}
        
console.log(greeting.getMessage());     // Hello
 // -------

function counter(val){
    return function(){return ++val};
}

let counter1=counter(0); // 1
let counter1=counter(0); // 2
let counter1=counter(0); // 3
 })()
