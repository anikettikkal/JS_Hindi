const mySym = Symbol('key1')

const myObj={
    name:"aniket",
    [mySym]:"mysym1",
    age:2,
    id:1234,
    friend:"pratiksha"
}
console.log(myObj);
console.log(myObj["name"]);
console.log( myObj[mySym]);

// freeze object
// Object.freeze(myObj);
// myObj.name="banti"
// console.log(myObj);

myObj.greeting = function(){
    console.log("hello world");
}
myObj.greetingTwo = function(){
    console.log(`good morning ${this.name}`);
}
console.log(myObj.greeting());
console.log(myObj.greetingTwo());




