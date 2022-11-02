//global variables
let playerScore = 0;
let computerScore = 0;
//let globalScore = `Player Score: ${playerScore} / Computer Score: ${computerScore}`;

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
        computerChoice = "Rock";
        break;

        case 1:
        computerChoice = "Paper";
        break;

        case 2:
        computerChoice = "Scissors";
        break;
    }
    
    //return the assigned statement
    return computerChoice;
}


function playRound(playerChoice, computerChoice) {
    
    //convert all strings to lowercase
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
        // console.log(playerChoice, computerChoice);
        // console.log(`You lost ${capitalizeFirstLetter(playerChoice)}`);

     //compare the player's choice to the computer's choice and determine winner and store the result to variable
    // let result = "";

    // if (playerChoice === computerChoice) {
    //     result = `It's a tie, you both chose: ${capitalizeFirstLetter(playerChoice)} \nPlayer Score: ${playerScore} / Computer Score: ${computerScore}`;
    // } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "scissors")) {
    //     computerScore++;
    //     result = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}. \nPlayer Score: ${playerScore} / Computer Score: ${computerScore}`;
    // } else if ((playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper")) {
    //     playerScore++;
    //     result = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}. \nPlayer Score: ${playerScore} / Computer Score: ${computerScore}`;
    // } else {
    //     result = `Invalid choice. Please choose one of the three options.`
    // }

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

 //return result
    return result;
}




//test if rounds work as expected by getting the computer to play against itself
    // const playerSelection = getComputerChoice();
    // const computerSelection = getComputerChoice();
    // console.log(playRound(playerSelection, computerSelection));




function game() {
    //loop 5 times    
        //ask for player's choice and store in variable
        //play round and record scores in variable

    // for (let i = 0; i < 5; i++) {
    //     let playerChoice = prompt("Rock, Paper or Scissors?");
    //     let computerChoice = getComputerChoice();
    //     alert(playRound(playerChoice, computerChoice));
    // }


    //loop until one of the scores reaches 5 (while no scores are equal to 5)    
        //ask for player's choice and store in variable
        //play round and record scores in variable

    while (playerScore != 5 && computerScore != 5) {
        let playerChoice = prompt("Rock, Paper or Scissors?");
        if (playerChoice === null) {
            return false;
        }
        let computerChoice = getComputerChoice();
        alert(playRound(playerChoice, computerChoice));
    }

    if (playerScore === 5) {
        alert(`Congratulations, you won! \nPlayer Score: ${playerScore} / Computer Score: ${computerScore}`)
    } else {
        alert(`Game over, you lost! \nPlayer Score: ${playerScore} / Computer Score: ${computerScore}`)
    }
}

game();