const user={};
user.id=101
user.name="pratiksha"
user.email="pratiksha@gmail.com"
user.fullname ={
    firstname:"pratiksha",
    lastname:"Galhe"
}

const myObj={
    name:"aniket",
    age:2,
    id:1234,
    friend:"pratiksha"
}
console.log(user);
console.log(user.fullname);
console.log(user.fullname.firstname);

// objThree = Object.assign({},user,myObj)
// console.log(objThree);

objThree = {...user,...myObj}
console.log(objThree);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// destructing object

const course ={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"aniket"
}

const {courseInstructor} = course;
console.log(courseInstructor);

