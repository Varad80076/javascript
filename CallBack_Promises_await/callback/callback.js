const hello = () => {
    console.log("Hello World");
};

setTimeout(hello,3000);

//callback Hell 
//nesting condition

let age = 19;
if(age>18){
    if(age>60){
        console.log("senier")
    }else{
        console.log("adult")
    }
}
else{
    console.log("child")
}