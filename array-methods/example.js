


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

