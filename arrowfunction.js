// Syntax
// ()=>{}

const arrowFunc = (num1,num2) => {
    return num1+num2; // explicit return
}
console.log(arrowFunc(3,2));

//implicit return

// const arrowFunctwo = (num3,num4)=> num3+num4
const arrowFunctwo =(num3,num4)=> (num3+num4)
console.log(arrowFunctwo(6,7));


// immedietly invoked function expression (IIFE) using arrow function

// regular function
// function test(){
//     console.log("db connected");
    
// }
// test();

(function test(){
    console.log("DB connected"); // we also called that name IIFE
    
})();

// using arrow function
(()=>{
    console.log("DB connected again");
    
})();

((name)=>{
    console.log(`db connected by ${name}`);
    
})("aniket")