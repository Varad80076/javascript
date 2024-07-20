// console.log("one");

// setTimeout(() => {
    
//     console.log("Two");
// },2000);


// console.log("Three");

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback) {
    sumCallback(a,b)
}
calculator(2,3,sum)