const myArr= [1,2,3,4,5,6]
// myArr.push(7)
// myArr.push(8)
// myArr.pop()
// myArr.unshift(10)
myArr.shift()

console.log(myArr);
console.log(typeof myArr.toString());

// slice and splice

schoolCrush = ["pratiksha","shrutika","gauri"]
clgCrush =["pradnya","pratiksha","aditi"]
// allCrushes = schoolCrush.concat(clgCrush)

allCrushes = [...schoolCrush,...clgCrush] // spread operator
console.log(allCrushes);

unique = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]]

newUnique = unique.flat(Infinity) // flattening the array
console.log(newUnique);

// convert string to array

const myName = "pratiksha"
console.log(Array.isArray(myName));
console.log(Array.from(myName));





