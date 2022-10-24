// Strings :

let str = "hello world";

//property:

console.log(str.length);

// String.prototype.str
console.log(str.charAt(1));
let str2 = str.concat(" yay !");
console.log(str); // it is not moddified
console.log(str2.endsWith("!")); // true
console.log(str2.startsWith("he")); // true
console.log(str2.includes("yay")); // true
console.log(str2.indexOf("yay")); //12
console.log(str2.lastIndexOf("yay")); //12, if there 2 yay, the last one
console.log(str2.match(/\!/g)); // found and return ['!']
console.log(str2.replace("world", "life")); //new
console.log(str2.repeat(2)); // create new string
console.log(str2.replaceAll("yay", "Oh")); // new
console.log(str2);
console.log(str2.search(/[A-Z]/)); // -1 bcz there is no capital in original
console.log(str2.slice(0, 5)); //hello (0 to 4) and returns
console.log(str2.split("")); // every letter in array
console.log(str2.split(" ")); // split every space

//---
console.log(str2.substring(6)); // world yay !
console.log(str2.substring(12, 15)); //yay  , same to slice
//----
const str3 = " Mozilla is great ";
console.log(str3.trim());
console.log(str3.length); // 18 bzc trim returns new str3
console.log(str3.trimEnd());
console.log(str3.trimStart());
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

//--
const s = new String("Hello Mars");
console.log(typeof s); // object
console.log(s.toString());
