const buttons =document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((items)=>{
    items.addEventListener('click',(e)=>{
        if(e.target.id === "orange"){
            body.style.backgroundColor = "orange"
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = "green"
        }
    })
})
