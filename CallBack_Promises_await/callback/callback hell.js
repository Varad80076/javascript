// for(let i =0 ; i<5 ;i++){
//     let str = ""
//     for(let j=0; j <5 ;j++){
//         str+=j;
//     }
//     console.log(i,str)
// } 

function getData(DataId,getNextData){
    setTimeout(() => {
        console.log("data =",DataId);
        if( getNextData){
            getNextData();
        }
            
    },2000);
}
//nested callback
//callback hell
console.log("Fetching Data1.......");
getData(1,()=>{
    console.log("Fetching Data2.......");
    getData(2,()=>{
        console.log("Fetching Data3.......");
        getData(3,()=>{
            console.log("Fetching Data4.......");
            getData(4,()=>{
            })
        });
    });
});

//data1
//data2
//data3