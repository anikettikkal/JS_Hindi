// for of loop

const myArr=["aniket","pratiksha","snehal","amol","vaibhav"];

for(const element of myArr){
    console.log(element);
    
}

// maps

const map = new Map()
map.set(1,"aniket")
map.set(2,"pratiksha")
map.set(3,"snehal")
for(const key of map){
    console.log(key);
    
}
for(const [key,value]of map){
    console.log(key,value);
    
}


// for in loop (by using this we can iterate over object properties)

const myObj ={
    name:"aniket",
    age:24,
    city:"pune",
    profession:"developer",
    isLoggedIn:true
}
for(const key in myObj){
    console.log(key);
    console.log(myObj[key]); 
}

//  for each loop

const languages =["python","javascript","c++","java","ruby"];

// languages.forEach(function (item){
//     console.log(item);
    
// })

languages.forEach((items)=>{
    console.log(items);
    
})

// main use of for each 

const coding = [
    {
        language:"python",
        difficulty:"easy"
    },
    {
        language:"javascript",
        difficulty:"medium"
    },
    {
        language:"c++",
        difficulty:"hard"
    }
] // i want to iterate only languages from that array so i can use for each

coding.forEach((item)=>{
    console.log(item.language);
    console.log(item.difficulty);
      
})