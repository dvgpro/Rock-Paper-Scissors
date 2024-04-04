const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const counter = document.querySelectorAll('.image-btn');

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

counter.addEventListener('click', () =>
{
    roundCounter(1);
});

function generateRandomNum(min, max)
{
    //Generates a random number between 1 and 3
    return Math.floor(Math.random() * (max - min +1) + min);
};

function getComputerSelection()
{
    let min = 1;
    let max = 3;
    //Calls the random number function to get a number between 1 and 3
    var randomNum = generateRandomNum(min, max);
    
    //Returns rock, paper, or scissors based on the random number generated
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
    }
};
