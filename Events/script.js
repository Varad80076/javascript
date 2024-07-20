let div = document.querySelector("div");
// div.style.color = "red";
/*
-----------------Events in JS------------------

The change in the state of an object is known as an Event
Events are fired to notify code of "interesting changes" that may affect code execution.
Mouse events (click, double click etc.)
Keyboard events (keypress, keyup, keydown)
Form events (submit etc.)
Print event & many more

node.event = ( ) {
handle here
}
------------------------------------------------------
*/

let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     console.log("btn1 was click")
//     let a = 20;
//     a++;
//     console.log(a);
// }
btn1.addEventListener("click", () => {
    console.log("btn1 was click")
});
btn1.addEventListener("click", (evt) => {
    console.log("btn1 was click - handler2")
    console.log(evt)
});
div.onmouseover = () =>{
    console.log(`you are inside`);
    div.style.color = "red";
}
/*
-------------------Event Listener-------------------------
node.addEventListener( event, callback )
node.removeEventListener( event, callback )
*Note : the callback reference should be same to remove
---------------------------------------------------------
*/

