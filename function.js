console.log("Hello World")

function getComputerChoice() {
   let number = Math.floor(Math.random() * 3);

    if  (number === 0) {
        return "scissors"; 
    }  else if (number === 1) {
        return "rock";
    }  else {
        return "paper"; 
    }
}


