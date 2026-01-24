let HumanScore = 0
let ComputerScore = 0

function getComputerChoice() {
   let number = Math.floor(Math.random() * 3);

    if  (number === 0) {
        return "scissors"; 
    }  else if (number === 1) {
        return "rock";
    }  else {
        return "paper"; 
    }   }


function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?")
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
     if ( 
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        HumanScore++    
        return (`You win ${humanChoice} beats ${computerChoice}.`)                
    } 
    else if (humanChoice === computerChoice) {
        return ("It's a draw!") 
    } 
    else {
        ComputerScore++
        return (`You lose! ${computerChoice} beats ${humanChoice}`)
    }    }           

function playGame() {
    for (let rounds = 0; rounds < 5; rounds++ ) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice()

        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score  Human: ${HumanScore}, Computer: ${ComputerScore}`);
    }

if (HumanScore > ComputerScore) {
    console.log("You are the overall winner!");
} else if (ComputerScore > HumanScore) {
    console.log("You lose the game!"); 
} else {
    console.log("It's a draw!");
}   }

playGame();

