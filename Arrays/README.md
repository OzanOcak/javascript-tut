## Arrays

### constructor :

- Array(length)    
- Array(prop1,prop2,prop3)

*Array.of, Array.from, and simply square parathesis [] also create arrays

### static methods : 

- Array.isArray                   => Array.isArray(arr)   // true
- Array.length                    => Array.of(1,2,3).length // 3
- Array.from                      => Array.from([1,2,3])   //  [1,2,3]
- Array.of                        => Array.of(5,2,3)     // [5,2,3]
- Array.name

### methods:

- Array.prototype.at              =>       let arr=[1,2,3]; arr.at(0)  // 1
- Array.prototype.concat          =>       arr.concat(arr2)     // [arr,...arr2]    
- Array.prototype.every           =>       arr.every(a=>a>2)   // false
- Array.prototype.fill            =>       Array(3).fill(1)    // [1,1,1]
- Array.prototype.filter          =>       arr(a=>a>1)         // [2,3]
- Array.prototype.find            =>       arr.find(a=>a>1)     // 2
- Array.prototype.findIndex       =>       arr.findIndex(a=>a>0)  // 0 (0th index)
- Array.prototype.forEach         =>       arr.forEach(a=>console.log(a+2))  // it doesn't return
- Array.prototype.includes        =>       arr.includes(2)       // true
- Array.prototype.indexOf         =>       arr.indexOf(2)       // 1 (if in list returns index, otherwise -1)
- Array.prototype.join            =>       arr.join()       // returns string  '1,2,3', if join(''), no comma
- Array.prototype.map             =>       arr.map(a=>a+2)  // [3,4,5]
- Array.prototype.pop             =>       arr.pop()  // 3
- Array.prototype.push            =>       arr.push(4)  // [1,2,4]
- Array.prototype.reduce          =>       arr.reduce((prev,curr)=>prev+curr,0)  // 7 (sum)
- Array.prototype.reverse         =>       arr.reverse()  // [3,2,1]      ==> it mutates
- Array.prototype.shift           =>       arr.shift()  // 3 // arr=[2,1]
- Array.prototype.unshift         =>       arr.unshift(7)  // [7,2,1]
- Array.prototype.slice           =>       arr.slice(0,1)  // [1,2]
- Array.prototype.some            =>       arr.some(i=>i%2===0)  // true
- Array.prototype.sort            =>       arr.sort() // sort((a,b)=>b-a)
- Array.prototype.toString        =>       arr.toString()  // "1,2,3"
- Array.prototype.splice          =>       arr.splice(2,3)  // from 2.th index take and return 3 indexes, 
                                                            // a = splice(2,0,4) // must be assigned
### iterator array methods :
                                           // arr1=["a","b","c"]
- Array.prototype.entries         =>       i_arr = arr1.entries(); console.log(i_arr.next().value)
- Array.prototype.keys            =>       i_arr = arr1.keys(); for( key of i_arr){console.log(key)}
- Array.prototype.values          =>       i_arr = arr1.values(); for( value of i_arr){console.log(value)}

#### notes :

- Array.from([number]) takes args as array while Array.of() can take as any primitive or object data types.
if Array.from(number) returns empty array
- Arrays are object thus they can use object methods
- some of array methods are higher order functions which means they can take function as an arg



