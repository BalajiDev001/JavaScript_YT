//accessing characters in js

a="hello world";

console.log(a[6]); //bracket notation -- //if returns undefined when outof range
console.log(a[60]) // it returned undefined bcoz index60 is not there outof range
console.log(a.charAt(6));   //it returns empty when outof range
console.log(a.charCodeAt(6)); //it returns unicode of a specific character
console.log(a.charAt(100)); // it returned empty bcoz index100 is not there outof range

console.log(a.at(6));    //supports -ve indexing

// num="hello namasthe";

// for(let num=0; num< num.length; num++);{
//     console.log(num);
    
// }


//indexOf(substring,startindex) --- searching   left - right first_occurances

hi="hellol prostack"

console.log(hi.indexOf("p")); //7
console.log(hi.indexOf("l")); //2
console.log(hi.indexOf("l",3)); // 3
console.log(hi.indexOf("l",4)); // 5  l is located at index5 after 4startpoint


hii="hello world, hello sky";
h1=hii.indexOf("hello")
console.log(h1); //0 index

console.log(hii.indexOf("hello",h1+1)); //13
console.log(hii.indexOf("matters")); //-1 //here "matters" is not there thats why its notfound(-1)


//lastindexOf(substring,startindex)  right - left   last_occurances

index="abc abc abc";
//    109876543210

console.log(index.lastIndexOf("abc")); // right to left last occurances at index8
console.log((index.lastIndexOf("america")));  //america is not found so its -1

console.log(index.lastIndexOf("abc",5));    //starting from 5 (it checks right to left and nearest only one not other than that---  not left to right) nearest one is 5 
// abc   abc   abc 
// 012 3 456 7 8910    if we give 5 the nearest one from index5 to left is 4 ..... 8th abc is to far&right it wont go rightside and 0th index is also far and one is enougf in js 
console.log(index.lastIndexOf("abc",3));    // starts at index 3 from left nearest from left is to far thats why its "0"
console.log(index.lastIndexOf("abc",10));   //starts at index 10 from left nearest is index8 so ans is 8th abc

