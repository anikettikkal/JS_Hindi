// let num = 42;
// console.log(num);
// console.log(typeof num);

// const nullValue = null;
// console.log(nullValue);
// console.log(typeof nullValue);


// let value = "aniket"
// console.log(typeof value);
// let changeValue = Number(value)
// console.log(typeof changeValue);

// let str1="aniket"
// let str2 = "aniket"
// console.log(str1+str2);

// console.log(str1===str2);

// const arr1 = [1,2,3,4]
// console.log(arr1);

// const obj ={
//     name:"aniket",
//     age:24,
//     isMarried:false
// }
// console.log(obj);

// const func = function(){
//     console.log("hello world");
    
// }
// console.log(func());

// ==================== methods of string================

// let str = new String("aniket-pratiksha")
// console.log(str);
// console.log(str[4]);
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.length);
// console.log(str.indexOf("p"));
// console.log(str.slice(4,-3));
// console.log(str.split('#'));

//=========== number and maths---------------

// let num = 199.8283
// console.log(num.toString().length);
// console.log(num.toLocaleString());
// console.log(num.toFixed(2));
// console.log(num.toPrecision(4));

// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.floor(2342.34));

// const arr = [1,2,3,4,5,6,7,8,9]
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// console.log(Math.floor((Math.random()*10)+1));

// console.log(Math.round(23.45));
// console.log(Math.ceil(23.12));
// console.log(Math.abs(-3));

// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.push(11)
// arr.pop()
// arr.unshift(12)
// arr.shift()
// console.log(arr);
// const arr2 = [11,23,12,34,34]
// const newArr = [...arr,...arr2]
// console.log(newArr);
// console.log(arr.concat(arr2));

// const val1=23
// const val2=34
// const val3=67
// console.log(Array.of(val1,val2,val3));

// const arr=[1,2,3,4,5,6,7,8,9,10]
// const str = arr.join()
// console.log(typeof str);


// const sym1 = Symbol("key1")

// const obj={
//     name:"aniket",
//     [sym1]:"mysym1",
//     age:24,
//     isMarried:false,
//     friend:"pratiksha"
// }
// obj.greeting = function (){
//     console.log("hello world");
// }
// console.log(obj);

// const obj1 ={
//     name:"aniket",
//     age:24,
//     isMarried:false,
//     friend:"pratiksha"
// }

// const obj2={
//     color:"blue",
//     height:5.9,
//     weight:70
// }

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// const obj43={...obj1,...obj2}
// console.log(obj43);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// destructing object

// const course ={
//     coursename:"js in hindi",
//     price:999,
//     courseInstructor:"aniket"
// }

// const {courseInstructor} = course;
// console.log(courseInstructor);


//================= functions ==================

// const myFunc = function(){
//     console.log("hello world from function expression");
// }
// console.log(myFunc());

// function addValue(...values){
//     return values;
// }
// const result = addValue(22,34,556,2334);
// console.log(result);

// function addtocart (val1,val2,...num1){
//     return num1
// }
// console.log(addtocart(200,34,643,353));


// const newFunc = (val1,val2)=> (val1+val2)
// console.log(newFunc(23,34));



// ======= immedietly invoked function expression==============

// (function test(){
//     console.log("DB connected");
// })();

//====================== control flow

// const age = 18;
// if (age==18) {
//     console.log("user is valid");
    
// } else {
//     console.log("user is not valid");
// }

// const balance = 5000;
// if(balance>1000) console.log("balance is maximum");

// const userLoggedIn = true;
// const paymentMode = false;

// if (userLoggedIn && paymentMode) {
//     console.log("both are true then ans is :true");
    
// } else {
//     console.log("one is false then ans is :false");
// }

// nullish coalescing operator and ternary operator

// const age = null;
// const userAge = age ?? 18;
// console.log(userAge);


// ternary operator

// const score = 45;
// const result = score>=35 ? "pass": "fail";
// console.log(result);

// iteration statements break and continue

// for(let a=1; a<=10; a++){
//     if (a==5) {
//         console.log("5 detected");
//         continue;
//     }
//     console.log(a);  
// }

// for of loop

// const myArr = ["aniket","pratiksha","snehal","rahul","sonali"];
// for(const items of myArr){
//     console.log(items);
// }

// map
// const map = new Map()
// map.set(1,"aniket")
// map.set(2,"pratiksha")
// map.set(3,"snehal")
// map.set(4,"rahul")
// map.set(5,"sonali")

// console.log(map);


// for(const [key,value] of map){
//     console.log(key,value);
// }

// for in loop is use to iterate over object properties

// const myObj ={
//     name:"aniket",
//     age:24,
//     city:"pune",
//     profession:"developer",
//     isLoggedIn:true
// }

// for(const key in myObj){
//     console.log(key);
//     console.log(myObj[key]);
// }

// working of foreach and for of is same 

// const myArr = ["aniket","pratiksha","snehal","rahul","sonali"];
// myArr.forEach((item)=>{
//     console.log(item);
    
// })

// filter, map , reduce in js

// filter is use to select only one element from array

// const myArr = ["aniket","pratiksha","snehal","rahul","sonali"];
// const newArr =myArr.filter((item)=>{
//     return item=="aniket"
// })
// console.log(newArr);

// map is use for make the changes in array and print new array

// const mapArr = [1,2,3,4,5,6,7,8]

// const newMapArr = mapArr.map((item)=>{
//     return item+10
// }).map((item)=>{
//     return item*10
// })
// console.log(newMapArr);

// reduced method for addition of array elements

const myArr = [1,2,4,65,7,4,4,2,234,5,43,32454]
const newArr = myArr.reduce((acc, curval)=>{
    return acc+curval
})
console.log(newArr);



