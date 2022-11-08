// ## MAP ##

// size => property

const map1 = new Map();

console.log(map1); // Map(0) {}
console.log(typeof map1); // object

map1.set("cat", "dog"); // Map(1) { 'cat' => 'dog' }
map1.set(1, "wolf");
console.log(map1, map1.size); // Map(2) { 'cat' => 'dog', 1 => 'wolf' } 2

// ----------- methods -------------
/*
set()
get()
delete()
clear()
has()
forEach()
values().next().value
keys().next().value
entries().nex().value
*/

for (const item of map1) {
  console.log(item); // [ 'cat', 'dog' ],[ 1, 'wolf' ]
}

// map1.clear();  // map.size = 0

// map1.delete("cat"); // delete [ 'cat', 'dog' ]

const iterator1 = map1.entries();
console.log("iterator 1 : ", iterator1.next().value); // [ 'cat', 'dog' ]
console.log("iterator 2 : ", iterator1.next().value); // [ 1, 'wolf' ]

console.log(map1.get("cat")); // dog
console.log(map1.has("cat")); // true

const iteratorKeys = map1.keys();
console.log("key 1: ", iteratorKeys.next().value); // cat
console.log("key 2: ", iteratorKeys.next().value); // 1

const iteratorValues = map1.values();
console.log("value 1: ", iteratorValues.next().value); // dog
console.log("value 2: ", iteratorValues.next().value); // wolf

// source : https://dev.to/faisalpathan/why-to-use-map-over-object-in-js-306m
