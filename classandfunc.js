//outside class or without class we can use keyword function

function greet(){
    return "without class or outside class we can use (function keyword)"
}
console.log(greet());


class One{
    add(){
        return "in class we dont use function keyword"
    }
}

let obj=new One();    //here we need to create one obj(user defined) to read the inside class method

console.log(obj.add());
