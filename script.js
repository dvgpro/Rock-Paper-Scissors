const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const counter = document.querySelectorAll('.image-btn');

const outputContainer = document.querySelector('.output-message')
const winnerContainer = document.querySelector('.winner-message')

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

//Will count the rounds whenever any of the three buttons are clicked
counter.addEventListener('click', () =>
{
    roundCounter(1);
});

function playRound(userSelection)
{
    let computerSelection = getComputerSelection();
    let winner = getWinner(userSelection, computerSelection);

    displayWinner(winner, userSelection, computerSelection);
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

function getWinner(userSelection, computerSelection)
{
    switch(userSelection)
    {
        case 'Rock':
            if(computerSelection==="Rock"){
                return 'Draw';
            }else if(computerSelection==='Paper'){
                return 'Computer';
            } else if(computerSelection==='Scissors'){
                return 'User';
            };
            break;
        case 'Paper':
            if(computerSelection==="Paper"){
                return 'Draw';
            }else if(computerSelection==='Scissors'){
                return 'Computer';
            } else if(computerSelection==='Rock'){
                return 'User';
            };
            break;
        case 'Scissors':
            if(computerSelection==="Scissors"){
                return 'Draw';
            }else if(computerSelection==='Rock'){
                return 'Computer';
            } else if(computerSelection==='Paper'){
                return 'User';
            };
            break;
    };
};

function displayWinner(winner, userSelection, computerSelection)
{
    const outputContent = document.createElement('div');
    const winnerContent = document.createElement('div');

    outputContent.classList.add("outputContent");
    winnerContent.classList.add('winnerContent');

    switch(winner)
    {
        case 'Draw':
            outputContent.textContent = userSelection + " equals " + computerSelection + "!";
            winnerContent.textContent = "It's a draw!";
            break;
        case 'Computer':
            outputContainer.textContent = computerSelection + " beats " + userSelection + "!";
            winnerContent.textContent = "Computer wins!";
            break;
        case 'User':
            outputContainer.textContent = userSelection + " beats " + computerSelection + "!";
            winnerContent.textContent = "User wins!";
            break;
    }

    outputContainer.appendChild(outputContent);
    winnerContainer.appendChild(winnerContent);
};