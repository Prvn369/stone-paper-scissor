let userScore = 0;
let compScore = 0;
let userName = prompt("Please Enter Your Name First")
let choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
let userNameText = document.querySelector("#user-name");

userNameText.innerText = userName.toUpperCase();



const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You Win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!\nYour ${userChoice.toUpperCase()} Beats Computer's ${compChoice.toUpperCase()}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!\nComputer's ${compChoice.toUpperCase()} Beats Your ${userChoice.toUpperCase()}`;  
        msg.style.backgroundColor = "red";     
    }
        
}


const draw = () => {
        console.log("Game Was Drawen");
        msg.innerText = "Drawen!\nPlay Again"; 
        msg.style.backgroundColor = "#274c77"; 
    }

genCompChoice = () => {
   const options = ["stone", "paper", "scissor"];
   const idx = Math.floor(Math.random()*3);
   return options[idx];
}

let playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);
    
   
    if(userChoice === compChoice){
        draw();
        
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            if(compChoice === "paper"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        else if(userChoice === "paper"){
            if(compChoice === "scissor"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        else if(userChoice === "scissor"){
            if(compChoice === "stone"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
})

