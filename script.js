const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const buttons = document.querySelectorAll('.image-btn');

const outputContainer = document.querySelector('.output-message');
const winnerContainer = document.querySelector('.winner-message');

const refreshPage = document.querySelector('.btn-reset');

let userPoints = 0;
let computerPoints = 0;
let roundCounter = 0;

btnRock.addEventListener('click', () =>
{
    playRound('Rock');
});

btnPaper.addEventListener('click', () =>
{
    playRound('Paper');
});

btnScissors.addEventListener('click', () =>
{
    playRound('Scissors');
});

function playRound(userSelection)
{ 
    let computerSelection = getComputerSelection();
    
    if(computerSelection === userSelection)
    {
        roundCounter += 1;
        outputContainer.textContent = userSelection + " equals " + computerSelection + "!";
        winnerContainer.textContent = "It's a draw!";
    }
    else if((computerSelection==='Paper' && userSelection==='Rock') || (computerSelection==='Scissors' && userSelection==='Paper') || (computerSelection==='Rock' && userSelection==='Scissors'))
    {
        computerPoints += 1;
        roundCounter += 1;
        outputContainer.textContent = computerSelection + " beats " + userSelection + "!";
        winnerContainer.textContent = "Computer wins!";
    } 
    else if((computerSelection==='Rock' && userSelection==='Paper') || (computerSelection==='Paper' && userSelection==='Scissors') || (computerSelection==='Scissors' && userSelection==='Rock'))
    {
        userPoints += 1;
        roundCounter += 1;
        outputContainer.textContent = userSelection + " beats " + computerSelection + "!";
        winnerContainer.textContent = "User wins!";
    };

    updateRound(roundCounter);

    if (roundCounter === 5)
    {
        gameOver(userPoints, computerPoints);
    };

};

function generateRandomNum(min, max)
{
    //Generates a random number based on the min and max numbers given elsewhere
    return Math.floor(Math.random() * (max - min +1) + min);
};

function getComputerSelection()
{
    let min = 1;
    let max = 3;
    
    var randomNum = generateRandomNum(min, max);
    
    
    switch(randomNum)
    {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    };
};

function updateRound(roundCounter)
{
    var roundDisplay = document.querySelector('.round-counter');

    roundDisplay.textContent = "Round: " + roundCounter;
};

refreshPage.addEventListener('click', () =>
{
    location.reload();
});

function gameOver(userPoints, computerPoints)
{
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

    outputContainer.textContent = "Game Over!"

    if (userPoints > computerPoints){
        winnerContainer.textContent = "User Win!";
    }else if(userPoints < computerPoints){
        winnerContainer.textContent = "Computer Wins!";
    }else if(userPoints===computerPoints){
        winnerContainer.textContent = "It's a Draw!";
    };

};