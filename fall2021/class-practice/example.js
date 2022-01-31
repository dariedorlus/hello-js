


//This works in js
let fruits = ["mango" , "carambola"]


// and This is crazy lol
let moreFruits =  ["lychee", 1,2,3,4, "Ranbutan"]


let array = ["dorian", "loquat"]
let push = array.push("mango"); // also return new length
console.log(...array, push ) // dorian loquat mango 3

let pop = array.pop()
console.log(...array, `\nThis is where we pop ${pop}`)
//dorian loquat 
//This is where we pop mango

array.unshift("kiwi", "peach")
let pos = array.indexOf("peach")
console.log(...array, pos) 
// kiwi peach dorian loquat 1

const str24 = "something \n something else"
console.log(str24.indexOf("thing"))
console.log(str24.split(' ')) 
// [ 'something', '\n', 'something', 'else' ]

const str25 = str24.replace("something", "awesome").replace("\n", "")
console.log(str25) // 


const str26 = str24.rep("something", "awesome")
console.log(str26)