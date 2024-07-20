//Q1
function vowel(msg){
    let sum=0;
    console.log(msg)
    for(let i=1;i<=msg.length;i++){
        if(msg[i]=='a'||msg[i]=='e'||msg[i]=='i'||msg[i]=='o'||msg[i]=='u'){
            sum++;
        };
    }
    return sum;
}
console.log(vowel("varad badgujar"));//4