// reduce method

// reduce method gives accumalator and current value as arguments to the callback function.

const myNums=[1,2,3,4,5]

const sum = myNums.reduce((acc , currval)=>{
    return acc + currval
},0)
console.log(sum);


