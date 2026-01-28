let result = document.querySelector('#result');
let start = document.querySelector('#start');
let choice = document.querySelector('#menu');
let score = document.querySelector('#score');
let humanScore = 0;
let computerScore = 0;
let choiceButtons = choice.querySelectorAll('button');

choiceButtons.forEach(btn => btn.disabled = true);

start.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    result.textContent = '';
    score.textContent = 'Pontszámod: 0 Gép pontszáma: 0';
    start.textContent = 'Újrakezd'
    choiceButtons.forEach(btn => btn.disabled = false);
});

function getComputerChoice() {
    const choices = ["kő", "papír", "olló"];
    return choices[Math.floor(Math.random() * 3)];
};

choice.addEventListener('click', (event) => {
    let button = event.target.closest('button'); 
    if (!button) return; 
    let humanChoice = button.id; 
         playRound(humanChoice, getComputerChoice());
         updateScore();  
         checkGameOver();      
});

function playRound(humanChoice, computerChoice) {
    if ( 
        (humanChoice === "papír" && computerChoice === "kő") ||
        (humanChoice === "olló" && computerChoice === "papír")
    ) {
        humanScore++
        updateResult(`Nyertél! az ${humanChoice} nyer a ${computerChoice} ellen.`);
    } if ((humanChoice === "kő" && computerChoice === "olló")) {
        humanScore++
        updateResult(`Nyertél! a ${humanChoice} nyer az ${computerChoice} ellen.`);
    } if ((computerChoice === "kő") && (humanChoice === "olló")) {
        computerScore++
        updateResult(`Vesztettél! a ${computerChoice} nyer az ${humanChoice} ellen.`);
    }
     else if (humanChoice === computerChoice) {
        updateResult("Döntetlen!"); 
    } else {
        computerScore++
        updateResult(`Vesztettél! az ${computerChoice} nyer a ${humanChoice} ellen.`);
    }
}; 

function updateScore() {
    score.textContent = `Pontszámod: ${humanScore} - Gép pontszáma: ${computerScore}`;       
};

function updateResult(message) {
    result.textContent = message;
};

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].disabled = true;
        }
    if (humanScore === 5) {
        updateResult("Nyertél!")
    }
    if (computerScore === 5) {
        updateResult("Vesztettél!")
    }
        start.textContent = 'Újrakezd';
    }
}