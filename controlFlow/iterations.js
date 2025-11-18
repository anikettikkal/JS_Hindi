// iterations called loops

for(i=1;i<=10;i++){
    const element = i;
    console.log(element);
}

// break and continue

for (let index=1; index<=20 ; index++){
    const element = index;
    if(element==5){
        console.log("5 detected");
        continue
    }
    console.log("element is", element);
    
}