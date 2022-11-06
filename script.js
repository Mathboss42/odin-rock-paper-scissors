//global variables
let playerScore = 0;
let computerScore = 0;

//selectors
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(btn => btn.addEventListener('click', playRound));
const div = document.querySelector('div');


function canRun() {
    if (playerScore < 5 && computerScore < 5) {
        return true;
    } else {
        return false;
    }
}


function displayGlobalScore() {
    let globalScore = `Player Score: ${playerScore} / Computer Score: ${computerScore}`;
    return globalScore
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function getComputerChoice() {

    //the function should generate a random integer between 0 and 2 and store it in a variable
    let randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber);

    //then assign either rock paper or scissors depending on the number generated
    let computerChoice = "";

    switch(randomNumber) {
        case 0:
        computerChoice = "rock";
        break;

        case 1:
        computerChoice = "paper";
        break;

        case 2:
        computerChoice = "scissors";
        break;
    }
    
    //return the assigned statement
    return computerChoice;
}

function compareChoices(playerChoice, computerChoice) {
        //compare the player's choice to the computer's choice and determine winner and store the result to variable
        let result = "";

        if (playerChoice === computerChoice) {
            result = `It's a tie, you both chose: ${capitalizeFirstLetter(playerChoice)} \n${displayGlobalScore()}`;
        } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "scissors")) {
            computerScore++;
            result = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}. \n${displayGlobalScore()}`;
        } else if ((playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper")) {
            playerScore++;
            result = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}. \n${displayGlobalScore()}`;
        } else {
            result = `Invalid choice. Please choose one of the three options.`
        }

        return result;
}


function playRound(e) {
    
    if (!canRun()) {
        return;
    }

    playerChoice = e.target.dataset.choice;
    console.log(playerChoice);
    computerChoice = getComputerChoice();

    let result = compareChoices(playerChoice, computerChoice);

    console.log(result);
    if (isGameOver(result)) {
        printWinner();
    } else {
        printResult(result);
    }
}

function printResult (result) {
    div.textContent = result;
}

function isGameOver (result) {
    if (canRun()) {
        return false;
    } else {
        return true; 
    }
}

function printWinner () {
    if (computerScore > playerScore) {
        div.textContent = `You lost the game! Final score: ${displayGlobalScore()}`;
    } else {
        div.textContent = `You won the game! Final score: ${displayGlobalScore()}`;
    }
}