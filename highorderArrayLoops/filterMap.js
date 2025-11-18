// filter 
const languages =["python","javascript","c++","java","ruby"];

const newLang = languages.filter((items)=>{
    return items.length > 4;
})
console.log(newLang);

// map
const numbers =[1,2,3,4,5];

const newNum = numbers.map((items)=>{
    return items * 2
})
console.log(newNum);

// chaining 

const myNum=[1,2,3,4,5,6,7,8,9,89]

const newNumbers = myNum.map((items)=>{
    return items * 3
}).map((items)=>{
    return items + 10
})
console.log(newNumbers);
