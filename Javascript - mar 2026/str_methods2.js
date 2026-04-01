//trim() to remove spaces from user input (trimStart - leftstarting and trimEnd- rightside)

a="        balaji pasupuleti        "
console.log(a);

console.log(a.trim()); //removes spaces between both sides
console.log(a.trimStart());
console.log(a.trimEnd());

//starts and ends checking

aa="hello world"
console.log(aa.startsWith("hello"));
console.log(aa.endsWith("hello"));


//toLocalUpperCase and toLocalLowerCase() -- some languages has special casing rules like turkish and germany (we use this methods when we develop international apps)

p1="dominos pizza"
console.log(p1.toUpperCase());

let p2="I"
console.log(p2.toLocaleLowerCase());
console.log(p2.toLocaleLowerCase("tr"));  //we need to mention which language we want here tr = turkish

let p3="i"
console.log(p3.toLocaleUpperCase());
console.log(p3.toLocaleUpperCase("tr"));

//search()

let r1="hello javascript";

console.log(r1.search("javascript")); //6
console.log(r1.search(/javascript/));  // here we searching same like javascript 
console.log(r1.search(/Javascript/));  // here we searching like Javascript  case-sensitive (not found -1)
console.log(r1.search(/Javascript/i));  // here we searching case-sensitive j !=J we using "i"


//substr(start,length) if we ommit length it goes to end 

let rr="happy independence day"
     // 012345678910
console.log(rr.substr(0,5)); //here starts at 0 and from 0 to 5 characters (happy)
console.log(rr.substr(6,5)); //starts at index6 and from 6 to 5characters (indep)