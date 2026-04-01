//string built-in methods

//length()
a="Prostack academy"

console.log(a.length);   //16

//toUpperCase and toLowerCase ()

b="bengaluru"
console.log(b.toUpperCase());    //BENGALURU
c="HYDERABAD"
console.log(b.toLowerCase());    //hyderabad

//includes()

app="javascript is fun"

console.log(app.includes("fun")); //true
console.log(app.includes("run")); //false

//indexOf  Returns the position of the first occurrence.

m="hello world"
// 012345678910

console.log(m.indexOf("world")); //6

// slice(start, end)
// Extracts a part of a string.

sli="umbrella"
console.log(sli.slice(0,5)); //umbre   
console.log(sli.slice(4));    //ella
// console.log(sli.slice(::-1)); //its a python syntax we cant do reverse a str like this syntax
console.log(sli.split("").reverse().join(''));



// substring(start, end)
// Similar to slice but doesn’t accept negative indexes.

slis="Hello"
console.log(slis.substring(1,4)); //ell


console.log(slis.substring(4,1));  // ell bcoz start < end if start>end it automatically swaps to 1,4


//replace - Replaces part of a string.

rep="i love java"

console.log(rep.replace("java","javascript"));

//replaceAll
reps="orange orange";

console.log(reps.replaceAll("orange","apple"))

// trim()
// Removes whitespace from both ends.

trm="    balaji pasupuleti   "
console.log(trm.trim());
console.log(trm);

// split()
// Splits string into an array.

spl="apple,banana,watermelon,lemon"
console.log(spl.split(""));
console.log(spl.split(","));

