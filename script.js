function playGame()
{    
    var user = 0
    var comp = 0

    for (let i=0; i<5; i++)
    {

        var userSelection = getUserSelection()
        var computerSelection = getComputerSelection()

        var point = singleRound(userSelection, computerSelection)
        

        switch (point)
        {
            case "userWins":
                user += 1
                break
            case "computerWins":
                comp += 1
                break
            case "draw":
                break
                
        }
    }

    if (user > comp)
    {
        return "You win the game!  " + user + "/5"
    }
    else if (user < comp)
    {
        return "You win the game!  " + comp + "/5"
    }
}

function getUserSelection()
{
    var userAns = prompt("Rock, Paper, Scissors, Shoot: ").toLowerCase()
    //Returns users input only when its equal to rock, paper or scissors, otherwise,it will return an error message and loop the function
    if (userAns === "rock" || userAns === 'paper' || userAns === "scissors")
    {
        return userAns
    }
    else
    {
        alert("Selection doesn't equal Rock, Paper, or Scissors! Try Again!");
        getUserSelection();
    }
}

function generateRandomNum(min, max)
{
    //Generates a random number between 1 and 3
    return Math.floor(Math.random() * (max - min +1) + min);
}

function getComputerSelection()
{
    let min = 1
    let max = 3
    //Calls the random number function to get a number between 1 and 3
    var randomNum = generateRandomNum(min, max)
    
    //Returns rock, paper, or scissors based on the random number generated
    switch(randomNum)
    {
        case 1:
            return "rock"
            break
        case 2:
            return "paper"
            break
        case 3:
            return "scissors"
            break
    }
}

function singleRound(userSelection, computerSelection)
{
    //Checks if the user wins, if they do, shows victory message and give user a point
    if ((userSelection === "rock" && computerSelection === "scissors") || (userSelection === "scissors" && computerSelection === "paper") || (userSelection === "paper" && computerSelection === "rock"))
    {
        alert(userSelection.charAt(0).toUpperCase() + userSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)  + "! You win!");
        return "userWins"
    }
    //Checks if the computer wins, if they do, shows defeat message and give the computer a point
    else if ((computerSelection === "rock" && userSelection === "scissors") || (computerSelection === "scissors" && userSelection === "paper") || (computerSelection === "paper" && userSelection === "rock"))
    {
        alert(computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)  + " beats " + userSelection.charAt(0).toUpperCase() + userSelection.slice(1)  + "! You lose!");
        return 'computerWins'
    }
    //Checks if the users and computer selections are the same, returns a draw message
    else if (userSelection === computerSelection)
    {
        alert(computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)  + " equals " + userSelection.charAt(0).toUpperCase() + userSelection.slice(1)  + "! It's a draw!");
        return "draw"
    }
}

var winner = playGame()
alert(winner)