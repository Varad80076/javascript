let arr = [5,7,8,6,1,3,9];


let evenarr = arr.filter((val)=>{
    if(val%2==0){
       return(val);
    }
   })
   
   console.log(evenarr)