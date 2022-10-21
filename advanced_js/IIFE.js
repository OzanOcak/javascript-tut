(function myIIFE(num) {
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num) : console.log("finished!");
})(0); // num=0

// ------------------------

const inc = (() => {
  let count = 0;
  // console.log(count); // 0 rins once bcz return func only call count and credit
  const credit = (num) => console.log(`I have ${count} picatchu`);
  return () => {
    count += 1;
    credit(count);
  };
})();

inc();
inc();

// returning anonymous function uses credit function and count variable, they become closur

// count variable and credit function become private, can be accessed outside

// * this example shows let and const also hoisted (which means stored in heap and undefined is assigned)
//let count still hoisted as let because if we change const, it gives type error

// ------------------------
const score = (() => {
  let count = 0;

  return {
    current: () => count,
    increment: () => count++,
    reset: () => (count = 0),
  };
})();

score.increment();
score.increment();
console.log(score.current());
score.reset();
console.log(score.current());

// or we can make methos closure

const score2 = (() => {
  let count = 0;
  const current = (count) => count;
  const increment = (count) => (count += 1);
  const reset = (count) => (count = 0);

  return {
    current: current, // we can alse pass current, increment, reset in return
    increment: increment,
    reset: reset,
  };
})();
