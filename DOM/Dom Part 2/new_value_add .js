let newBtn  = document.createElement("button");
newBtn.innerText = "Click me!";


let div = document.querySelector("div")
let newdiv = document.createElement("div");
div.append(newdiv)

//  newdiv.innerHTML = newBtn;

 newdiv.append(newBtn);
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi,I am new!</i>";
//  document.querySelector("body").prepend(newHeading);
// div.prepend(newHeading)
let body = document.querySelector("body").prepend(newHeading)