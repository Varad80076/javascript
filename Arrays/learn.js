let marks=[58,87,45,25,36,45,12,78];
console.log(marks[5])
console.log(marks[6])
console.log(marks[100])
console.log(marks[5]=85)
console.log(marks)
sum=0;
for (let i of marks){
    sum+=i
    console.log(sum);
}
let avarage = sum/marks.length;
console.log(`Average Marks of Class is ${avarage}`);