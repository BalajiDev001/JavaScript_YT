const obj1 = {};
const obj2 ={
    name: " balaji"
}
const obj3={
    name:"kalyan"
}
const obj4={
    name:"Shaila bhanu"
}

obj1[obj2]={
    name:"gnanesh"
}

obj1[obj3]={
    name:"chandhu"
}
obj1[obj4]={
    name:"shaila bhanu"
}


console.log(obj1[obj2]);
console.log(obj1[obj4]);
console.log(obj1[obj3]);
console.log(obj1[obj1]);
