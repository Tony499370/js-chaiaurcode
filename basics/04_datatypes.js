"use strict";

console.log(typeof null);

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);
console.log(typeof id);

const myFunction = function(){
    console.log("Hello World");
}

const myObj = {
    name :  "abhi",
    age : 20,
}

const arr = ["abhi" , "hbf"]

console.log(typeof arr);
console.log(typeof myFunction);
console.log(typeof myObj);


// Memory : Stack and Heap
// Stack -> Primitive (we get a copy of variable)Stirng , number , boolean
// Heap -> Non-Primitive (we get reference to same memory) obj , func , array

let userone = {
    email : "tony@gmail.com",
    age : 18,
}

let usertwo = userone;
usertwo.email = "stark@gmail.com"

console.log(userone);
console.log(usertwo);
