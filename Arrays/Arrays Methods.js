//push method
let fruits = ["banana","apple","mango"];

// console.log(fruits);
// fruits.push("papaya")
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// console.log(fruits.toString());

let arr = ["varad","pankaj","badgujar"];
// console.log(arr);
let concat = fruits.concat(arr);
console.log(concat);
// fruits.unshift("greeps")
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
console.log(concat.slice(2,5));
// console.log(concat.splice(2,4));//to delete after first entry
concat.splice(2,2,"coffee","berry");//to delete after first entry and add to second entry splice( startindex,deleteindex,add element)
console.log(concat)
let arr2 = [1,2,3,4,5,6,7,8];

arr2.splice(2,4,101,102,103)
console.log(arr2)
//splice is very usefull method we can add / delete and replace element