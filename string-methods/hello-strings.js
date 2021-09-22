

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;


const stringify = new String("stringify")
const string4 = "A string primitive";

const t =  stringify.charAt(1) // outputs "t"
const r =  stringify[2] // outputs "r"


let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."

let longString1 = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."

const str11 = 'Hello';
const str22 = 'World';

console.log(str11.concat(' ', str22));
// expected output: "Hello World"

console.log(str22.concat(', ', str11));
// expected output: "World, Hello"

let str = 'To be, or not to be, that is the question.'

console.log(str.endsWith('question.'))  // true
console.log(str.endsWith('to be'))      // false
console.log(str.endsWith('to be', 19))  // true


const str111 = 'Saturday night plans';

console.log(str111.startsWith('Sat'));
// expected output: true

console.log(str111.startsWith('Sat', 3));
// expected output: false

const moz = 'Mozilla';

console.log(moz.substring(1, 3));
// expected output: "oz"

console.log(moz.substring(2));
// expected output: "zilla"

console.log(moz.substring(1, 1));
