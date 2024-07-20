const BASE_URL =
 "https://latest.currency-api.pages.dev/v1/currencies/inr.json"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")

for(let select of dropdowns){
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        
        if(select.name === "from" && currCode ==="USD"){
            newOption.selected = "selected"
        }
        else if(select.name === "to" && currCode ==="INR"){
            newOption.selected = "selected"
        }

        select.append(newOption);
    }
    select.addEventListener("change",(evt) =>{
        updateFlag(evt.target)
    })
}

const updateFlag =(Element)=> {
    let currCode = Element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = Element.parentElement.querySelector("img");
    img.src = newsrc
}

btn.addEventListener("click",async(evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval ===""||amtval <1){
        amtval =1;
        amount.value ="1";

    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    console.log(response)
})
