// to solve callback hell problem promises are comes
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         // resolve("problem resolve");     //to resolve problem.
//         // reject("promise not fullfiled")  //to reject problem.
//     });
// }

// let promise = getPromise();
// promise.then((res)=> {
//     console.log("promise fulfilled",res);
// })
// promise.catch((err)=> {
//     console.log("rejected",err);
// })

function getData(DataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data =", DataId);
      resolve("success");
      // reject("error");
      if (getNextData) {
        getNextData();
      }
    }, 3000);
  });
}

//method 1
/*console.log("fetching data ........");
let p1 = getData(1);
p1.then((res) => {
  console.log(res);
  getData(2).then((res) => {
    console.log(res);
  });
});*/



//method2
console.log("fetching data ........");
getData(1)
  .then((res) => {
    return getData(2);
})
.then((res) => {
    return getData(3);
  }).then((res) => {
    console.log(res);
  })
