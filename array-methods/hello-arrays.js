



//Add the numbers of an array

let array = ["mango", "dorian", "loquat", "jackfruit", "spanish lime", "water melon", "cotton candy grappe"];

console.log(array);

//Add another fruit with push -- This adds the element to the bottom
array.push("lemon");
// console.log(array);

//Add another fruit to the top
const length = array.unshift("lime");

let pop = array.pop();
let a  = array.fill("exotic", 0, 3);

let res = a.splice(0, 3);
console.log(res);
console.log(a);

let reunited  = res.concat(a);
console.log(reunited);

reunited.forEach(function(val, i, arr){
    console.log(val, i );
});

const arr = [1,2,3,4,5,6]
let mappped = arr.map(function(val, i, tempArr){

    return val * i;
}) // 0 2 6 12 20 30

console.log(...mappped)

const array1 = [1, 2, 3, 4];
const reduced = array1.reduce( function (prev, current)  {
    return prev + current
})
console.log(reduced) // 10