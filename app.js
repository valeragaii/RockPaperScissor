const container = document.querySelector('#container');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const btnContainer = document.querySelector('#btnContainer')
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorBtn = document.querySelector('#scissorBtn');

let playerWin = 0;
let computerWin = 0;

let computerSelection = computerPlay().toLowerCase();
let playerSelection = '';

function computerPlay() {
    let choices = ['rock', 'paper', 'scissor']
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(computerSelection, playerSelection) {
        if (playerSelection == "rock") {
            if (computerSelection == 'rock') {
                return "Tie";
            }
            else if (computerSelection == 'paper') {
                computerWin++;
                return "You Lose";
            }
            else if (computerSelection == 'scissor') {
                playerWin++;
                return "You Win";
            }
        }
        else if (playerSelection == 'paper') {
            if (computerSelection == 'paper') {
                return "Tie";
            }
            else if (computerSelection == 'rock') {
                playerWin++;
                return "You Win";
            }
            else if (computerSelection == 'scissor') {
                computerWin++;
                return "You Lose";
            }
        }
        else if (playerSelection == 'scissor') {
            if (computerSelection == 'scissor') {
                return "Tie";
            }
            else if (computerSelection == 'paper') {
                playerWin++;
                return "You Win";
            }
            else if (computerSelection == 'rock') {
                computerWin++;
                return "You Lose";
            }
        }
        else {
            return "Invalid Input";
        }
    }

function clickHandler(event) {
    result.textContent = playRound(event.target.textContent.toLowerCase(), computerPlay());
    score.textContent = `Player: ${playerWin} Computer: ${computerWin}`;
    if (playerWin === 5 || computerWin === 5) {
        rockBtn.removeEventListener('click', clickHandler);
        paperBtn.removeEventListener('click', clickHandler);
        scissorBtn.removeEventListener('click', clickHandler);
        result.textContent = `${playerWin === 5 ? 'you' : 'computer'} Won!`
    }
}

rockBtn.addEventListener('click', clickHandler);
paperBtn.addEventListener('click', clickHandler);
scissorBtn.addEventListener('click', clickHandler);

result.textContent = 'click on button';
score.textContent = 'first 5 points!'

