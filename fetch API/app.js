const URL ="https://cat-fact.herokuapp.com/facts";
const facts =document.querySelector("#fact");
const Btn =document.querySelector("#btn");

//using async await 
// const getFacts = async ()=>{
//     console.log("Fetching data.....");
//     let response = await fetch(URL);
//     console.log(response.status);
//     let data = await response.json();
//     console.log(data);
//     facts.innerText = data[2].text
// }
function getFacts()
{
    fetch(URL).then((res) =>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        facts.innerText = data[2].text

    });
}
Btn.addEventListener("click",getFacts);