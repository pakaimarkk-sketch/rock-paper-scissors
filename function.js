let result = document.querySelector('#result');
let start = document.querySelector('#start');
let choice = document.querySelector('#menu');
let score = document.querySelector('#score');
let humanScore = 0
let computerScore = 0
let choiceButtons = choice.querySelectorAll('button');

choiceButtons.forEach(btn => btn.disabled = true);

start.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    result.textContent = '';
    score.textContent = 'Player Score: 0 Computer Score: 0';
    start.textContent = 'Restart'
    choiceButtons.forEach(btn => btn.disabled = false);
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

choice.addEventListener('click', (event) => {
    let button = event.target.closest('button'); 
    if (!button) return; 
    let humanChoice = button.id; 
         playRound(humanChoice, getComputerChoice());
         updateScore();  
         checkGameOver()      
});

function playRound(humanChoice, computerChoice) {
    if ( 
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++
        updateResult(`You win ${humanChoice} beats ${computerChoice}.`);
            
    } else if (humanChoice === computerChoice) {
        updateResult("It's a draw!"); 
    } else {
        computerScore++
        updateResult(`You lose! ${computerChoice} beats ${humanChoice}`);
    };  
}; 

function updateScore() {
    score.textContent = `Player score: ${humanScore} - Computer score: ${computerScore}`;       
};

function updateResult(message) {
    result.textContent = message;
};

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].disabled = true;
        }
        start.textContent = 'Restart';
    }
}