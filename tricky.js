const arr=[100,"q","balaji",10,8,"c"];
const number=[];
const str = [];
const ch = [];

// console.log(typeof 100, typeof "balaji", typeof "c", typeof 8);

arr.forEach((ele)=>{
    if(typeof ele == "number") number.push(ele);
    else if(typeof ele == "string"){
        if(ele.length>1) str.push(ele);
        else ch.push(ele);
    }
})

console.log(number);
console.log(str);
console.log(ch);
