let arr = [250,645,300,900,50]

console.log(arr)
let i=0;
for(let val of arr){
    // console.log(`Value of Index${i} = ${val}`)
    let offer = val/10;
    arr[i]= arr[i] - offer;
    console.log(`Value after offer = ${arr[i]}`);
    i++;
}