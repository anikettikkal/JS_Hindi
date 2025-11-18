"use strict"; // treat all js code as newer version
// number , string, boolean(true,false), null, undefined

// primitive number, boolean, string,null, undefindes,symbol,bigint

// non primitive - object,array, function

let heroes = ["aniket", "john", "bob"];

let myObj ={
    name: "aniket",
    age: 24
}

const myFunc = function(){
    console.log("hello world");
    
}

console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunc);

const user ={
    email:"aniket@gmail.com",
    upi:"user@ybl"
}
const usertwo = user;

usertwo.email="tikkal@gmail.com"
console.log(user.email);
console.log(usertwo.email);

let onevalue = 100;
let secondvalue = onevalue;
secondvalue = 200;
console.log(onevalue);
console.log(secondvalue);
