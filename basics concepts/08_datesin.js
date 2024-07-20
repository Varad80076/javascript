//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)


let myCreatedDate = new Date(2004,2,2)// months start with 0

let myCreatedDate1 = new Date("01-24-2023")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate1.toDateString())

//to compared Dates
// console.log(myCreatedDate.getTime())


// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay()) 
console.log(newDate.getDate())
console.log(newDate.getFullYear())
newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})