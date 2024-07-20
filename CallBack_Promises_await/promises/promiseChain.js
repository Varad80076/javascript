function asyncFunc1(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("some Data1");
            resolve("success");
        },5000)
    });
};

function asyncFunc2(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("some Data2");
            resolve("success");
        },5000)
    });
};


//callback Hell

console.log("fetching Data1...........")
asyncFunc1().then((res) => {
    console.log(res);
    console.log("fetching Data2...........")
    asyncFunc2().then((res) => {
        console.log(res);
        console.log("fetching Data3...........");
        
    });
});

