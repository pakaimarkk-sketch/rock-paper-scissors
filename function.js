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
    score.textContent = 'Pontszámod: 0\nGép pontszáma: 0';
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
    if (humanChoice === computerChoice) {
        updateResult("Döntetlen!");
        return;
}   if (
        (humanChoice === "papír" && computerChoice === "kő") ||
        (humanChoice === "olló" && computerChoice === "papír") ||
        (humanChoice === "kő" && computerChoice === "olló")
    ) {
        humanScore++;
        updateResult(
            `Nyertél!\n${article(humanChoice)} ${humanChoice} legyőzi ${article(computerChoice)} ${computerChoice}-t.`
        );
        return;
    } computerScore++;
    updateResult(
        `Vesztettél!\n${article(computerChoice)} ${computerChoice} legyőzi ${article(humanChoice)} ${humanChoice}-t.`
    );
}


function updateScore() {
    score.textContent = `Pontszámod: ${humanScore} \nGép pontszáma: ${computerScore}`;       
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
        updateResult("Megnyerted a mérkőzést!")
    }
    if (computerScore === 5) {
        updateResult("Elvesztetted a mérkőzést!")
    }
        start.textContent = 'Újrakezd';
    }
}

function article(word) {
    return ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"]
        .includes(word[0].toLowerCase()) ? "az" : "a";
}