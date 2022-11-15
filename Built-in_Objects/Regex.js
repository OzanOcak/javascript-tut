let text="hello great world, wassup?"
let n = text.search("world"); // 13

text.replace("great","Wonderful"); // "hello great Wonderful, wassup?"

let result = text.replace(/wonderful/i, "Earth"); // /wonderful/i  --> i is ignore capital letter

// i	Perform case-insensitive matching	
// g	Perform a global match (find all matches rather than stopping after the first match)	
// m	Perform multiline matching

//[abc]	Find any of the characters between the brackets	
// [0-9]	Find any of the digits between the brackets	
// (x|y)	Find any of the alternatives separated with |

// \d	Find a digit	
// \s	Find a whitespace character	
// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
// \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

// n+	Matches any string that contains at least one n
// n*	Matches any string that contains zero or more occurrences of n
// n?	Matches any string that contains zero or one occurrences of n

const pattern = /best/;
pattern.test("The best things in life are free!");  // true

e.exec("baby jesus") //
