let arr = [5,7,8,6,1,3,9];
//add array
let newreduce = arr.reduce((res,cur)=>{
    return res+cur;
})
console.log(newreduce)

// smallest num in array

const output = arr.reduce((pre,cur)=>{
    return pre < cur ? pre : cur
})
console.log(output)
// largest num in array

const large = arr.reduce((pre,cur)=>{
    return pre > cur ? pre : cur
})
console.log(large)