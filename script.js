const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
var btnCounter = document.querySelectorAll('.image-btn');

const outputContainer = document.querySelector('.output-message');
const winnerContainer = document.querySelector('.winner-message');

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
        outputContainer.textContent = userSelection + " equals " + computerSelection + "!";
        winnerContainer.textContent = "It's a draw!";
    }
    else if((computerSelection==='Paper' && userSelection==='Rock') || (computerSelection==='Scissors' && userSelection==='Paper') || (computerSelection==='Rock' && userSelection==='Scissors'))
    {
        computerPointsPoints += 1;
        outputContainer.textContent = computerSelection + " beats " + userSelection + "!";
        winnerContainer.textContent = "Computer wins!";
    } 
    else if((computerSelection==='Rock' && userSelection==='Paper') || (computerSelection==='Paper' && userSelection==='Scissors') || (computerSelection==='Scissors' && userSelection==='Rock'))
    {
        userPoints += 1;
        outputContainer.textContent = userSelection + " beats " + computerSelectionSelection + "!";
        winnerContainer.textContent = "User wins!";
    };
            
       

    console.log(userPoints);
    console.log(computerPoints);

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
