//for Each is heigher order function of higher order method

let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val){
    console.log(val)
})

let city = ["delhi","jalgaon","mumbai"]
city.forEach((val,idx,city) => {
console.log(val.toUpperCase(),idx,city)
})//we can use any one