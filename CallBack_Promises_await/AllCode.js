function getData (getData,getNextData){
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        console.log("weather data = ",getData);
        resolve("success");
      },1500);
    });
  }
  
//Async-await
  bn
//   async function hello(){
//     console.log("this is async-await")
// console.log("fetching Data1...........")
//     await getData(1);
// console.log("fetching Data2...........")
//     await getData(2);
// console.log("fetching Data3...........")
//     await getData(3);
// console.log("fetching Data4...........")
//     await getData(4);
// console.log("fetching Data5...........")
//     await getData(5);
// console.log("fetching Data6...........")
//     await getData(6);

//   }
  //IIFE Function it is use when call only one time
//   (async function hello(){
//     console.log("this is async-await")
// console.log("fetching Data1...........")
//     await getData(1);
// console.log("fetching Data2...........")
//     await getData(2);
// console.log("fetching Data3...........")
//     await getData(3);
// console.log("fetching Data4...........")
//     await getData(4);
// console.log("fetching Data5...........")
//     await getData(5);
// console.log("fetching Data6...........")
//     await getData(6);

//   })();


//callback hell
// console.log("Fetching Data1.......");
// getData(1,()=>{
//     console.log("Fetching Data2.......");
//     getData(2,()=>{
//         console.log("Fetching Data3.......");
//         getData(3,()=>{
//             console.log("Fetching Data4.......");
//             getData(4,()=>{
//             })
//         });
//     });
// });

//promise chain

console.log("this is promise chain")
console.log("fetching Data1...........")
getData(1).then((res) => {
    console.log(res);
    console.log("fetching Data2...........")
    getData(2).then((res) => {
        console.log(res);
        
        
    });
});
