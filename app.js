let computerSelection = computerPlay().toLowerCase();
let playerSelection = '';

function computerPlay() {
    let choices = ['rock', 'paper', 'scissor']
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(computerSelection, playerSelection) {
    playerSelection.toLowerCase();

        //running through possibilites
        if (playerSelection == "rock") {
            if (computerSelection == 'rock') {
                return "Tie";
            }
            else if (computerSelection == 'paper') {
                return "You Lose";
            }
            else if (computerSelection == 'scissors') {
                return "You Win";
            }
        }
        else if (playerSelection == 'paper') {
            if (computerSelection == 'paper') {
                return "Tie";
            }
            else if (computerSelection == 'rock') {
                return "You Win";
            }
            else if (computerSelection == 'scissors') {
                return "You Lose";
            }
        }
        else if (playerSelection == 'scissors') {
            if (computerSelection == 'scissors') {
                return "Tie";
            }
            else if (computerSelection == 'paper') {
                return "You Win";
            }
            else if (computerSelection == 'rock') {
                return "You Lose";
            }
        }
        else {
            return "Invalid Input";
        }
    }

    //creating function to play a 5 round game
    function game() {
        //creating score keep variable counters
        let playerWin = 0;
        let computerWin = 0;

        //looping in order to play 5 times
        for (let i = 0; i < 5; i++) {
            //prompting user for input + logging their choice
            playerSelection = window.prompt("Your Choice Is: ");
            console.log("You Chose: " + playerSelection);

            console.log("Computer Chose: " + computerSelection);
            //call playRound() + keep track of score
            playRound(playerSelection,computerSelection);
            //storing the score and updating it
            if (playRound(playerSelection,computerSelection) == "You Win") {
                playerWin++;
                console.log("You Win");
            }
            else if (playRound(playerSelection,computerSelection) == "You Lose") {
                computerWin++;
                console.log("You Lose");
            }
            else if (playRound(playerSelection,computerSelection) == "Tie") {
                playerWin++;
                computerWin++;
                console.log("Tie");
            }
            computerSelection = computerPlay().toLowerCase();
        }
        //final output 
        if (playerWin > computerWin) {
            console.log("Final Result: Win");
        }
        else if (playerWin < computerWin) {
            console.log("Final Result: Lost");
        }
        else if (playerWin == computerWin) {
            console.log("Final Result: Tie")
        }
    }
console.log(game());