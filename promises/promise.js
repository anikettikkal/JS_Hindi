// promise created

const promiseOne= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise created");
        resolve()
    },2000)
})

// promise consumed

promiseOne.then(()=>{
    console.log("promise consumed");
    
})

const promiseTwo= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise two created");
        resolve()
    },2000)
}).then(()=>{
    console.log("promise two consumed");
})
