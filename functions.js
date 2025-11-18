function myfuc(){
    console.log("good mornings");
}
myfuc();

// function sum(num1,num2){
//     console.log(num1+num2);
    
// }
// sum(2,3);

function sum(num1,num2){
    return num1+num2;
}
const result = sum(2,3);
console.log(result);


// rest parameters
function addtocart (val1,val2,...num1){
    return num1
}
console.log(addtocart(200,34,643,353));

const newArr= [200,300,500,600,700]

function getarrayvalues(acceptvalues){
    return acceptvalues[3];
}
console.log(getarrayvalues(newArr));

