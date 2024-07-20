let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
let btn = document.querySelector(".btn")


const resetbtn= () =>{
     msg.innerText = "Play Your Move "
     userScorePara.innerText = userScore= 0;
     compScorePara.innerText = compScore = 0;
     msg.style.backgroundColor = "rgb(30, 29, 29)";
}

const drawGame = () => {
    msg.innerText = "game was draw.Play Again."
    msg.style.backgroundColor = "rgb(30, 29, 29)";
};

const showWinner = (userWin,useChoice,compChoice1) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${useChoice} beats your ${compChoice1}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice1} beats your ${useChoice}`
        msg.style.backgroundColor = "red";
    }
}

const compChoice = () =>{
    const option = ["rock", "paper" , "scissor"];
    const random = Math.floor(Math.random()*3);
    const result = option[random];
    return result;
}

const playGame = (userChoice) =>{
    console.log("you choose = ",userChoice)
    // Generate Computer Choice
     const compChoice1 = compChoice();
    console.log("this is computer choice = ", compChoice1);

    if(userChoice === compChoice1){
        //draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice1 === "paper" ? false : true; 
        }
        else if(userChoice === "paper"){
            userWin = compChoice1 === "scissor"? false: true;
        }
        else{
            userWin = compChoice1 === "rock"? false: true;
        }

        showWinner(userWin,userChoice,compChoice1);
    }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

btn.addEventListener("click", resetbtn);
