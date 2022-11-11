console.log(Set.prototype.size);

const mySet1 = new Set()

mySet1.add(1)           // Set(1) { 1 }
mySet1.add(5)           // Set(2) { 1, 5 }
mySet1.add(5)           // Set(2) { 1, 5 }
mySet1.add('some text') // Set(3) { 1, 5, 'some text' }

mySet1.has(1)              // true

mySet1.delete(5)    // removes 5 from the set

const set1 = new Set();
set1.add(1);
set1.add('foo');

console.log(set1.size);
// expected output: 2

set1.clear();
set1.delete(5;)
