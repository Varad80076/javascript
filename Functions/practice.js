//Q1
let arr = [5,7,8,6,1,3,9];

arr.forEach((val) =>{
    console.log(val*val);
})

//Q2 filter marks of student that scored 90

let arr2 = [98,45,87,99,96,100,44];

let output = arr2.filter((val)=>{
    return val >=90;
})
console.log(output)
//Q3
let n=3;
let arr3 = [];

for(i=1;i<=n;i++){
    arr3.push(i);
}
console.log(arr3)
let newarr = arr3.reduce((val,cur)=>{
    return val+cur;
})
console.log(newarr)
 let factorial = arr3.reduce((val,cur)=>{
    return val * cur;
})
console.log("factorial = ",factorial)