let a=10 //values can be change , block-scoped , 
const b=20  //values cant be re-assigned , also block scoped
var c=30   // function scoped , causes bugs 

console.log(a+b);
console.log(a+c);

c=c+10
console.log(a+c);


//variables can store any data type

let message="hello"
let countu=100
let avail=true
let obj={name:"balaji"}
let arr=[1,2,3,4,5]

console.log(message,typeof(message));
console.log(typeof(message));

console.log(countu);
console.log(typeof(countu));

console.log(avail);
console.log(typeof(avail));

console.log(obj);
console.log(typeof(obj));

console.log(arr);
console.log(typeof(arr));


