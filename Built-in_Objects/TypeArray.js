//  TypedArray

let buffer = new ArrayBuffer(6); // default is Int6Array which is 8 bites per index

let size = buffer.byteLength === 6 ? true : false; // true

let x = buffer.slice(3); // ArrayBuffer { [Uint8Contents]: <00 00 00>, byteLength: 3 }

let view1 = new Int8Array(buffer);
view1[0] = 42; // there are 8 bits, max is 127
console.log(view1); //  Int8Array(6) [ 42, 0, 0, 0, 0, 0 ]     42 =>    0010 1010    => 1 byte

let view2 = new Int16Array(buffer);
view2[0] = 138;
console.log(view2); // Int16Array(3) [ 138, 0, 0 ]

//---------------
// we can also create generic view and set numbers

let view3 = new DataView(buffer);
view3.setInt8(1, 23); // [Uint8Contents]: <8a 17 00 00 00 00>  hexadecimal, 17 is 7+16 = 23
// eventhough we create new view, since type is same, it updated existed Int8Array type array
let num = view3.getInt8(1); // 23
