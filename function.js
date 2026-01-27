let HumanScore = 0
let ComputerScore = 0

function getComputerChoice() {
   const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

let choice = document.querySelector('#menu');

choice.addEventListener('click', (event) => {
    let humanChoice = event.target.id;
    playRound(humanChoice, getComputerChoice());
});

function playRound(humanChoice, computerChoice) {
     if ( 
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        HumanScore++    
        console.log(`You win ${humanChoice} beats ${computerChoice}.`)           
    } 
    else if (humanChoice === computerChoice) {
        console.log("It's a draw!") 
    }
    else {
        ComputerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }   

};           



