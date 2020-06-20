function game () 
{
    // Getting the player's choice
    function playerPlay()
    {
        let answer = window.prompt("Rock, paper, or scissors?");
        answer = answer.toLowerCase();
        return answer;
    }
    
    // Allow the computer to choose randomly between 'rock', 'paper', and 'scissors'
    function computerPlay() 
    {
        // select a number between 0 and 3
        let numberChoice = Math.floor(Math.random() * 3);
        let options = ['rock', 'paper', 'scissors'];
    
        return options[numberChoice];
    }
    
    let playerChoice = playerPlay();
    let computerChoice = computerPlay();
    
    // Comparing the choices between the player and computer and displaying the winner to the console.
    function playRound(playerSelection, computerSelection)
    {
        // Player Losing Conditions
        if (playerSelection === 'rock' && computerSelection === 'paper')
        {
            console.log('The computer chose paper');
            console.log('You Lose! Paper beats Rock');
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors')
        {
            console.log('The computer chose scissors');
            console.log('You Lose! Scissors beats Paper');
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock')
        {
            console.log('The computer chose rock');
            console.log('You Lose! Rock beats Scissors');
        }
        // Player Winning Conditions
        else if (playerSelection === 'rock' && computerSelection === 'scissors')
        {
            console.log('The computer chose scissors');
            console.log('You Win! Rock beats Scissors');
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock')
        {
            console.log('The computer chose rock');
            console.log('You Win! Paper beats Rock');
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper')
        {
            console.log('The computer chose paper');
            console.log('You Win! Scissors beats Paper');
        }
        else {
            console.log(`The computer chose ${computerSelection}`);
            console.log('The round was a draw.');
        }

    }

    playRound(playerChoice, computerChoice);



}


// Game needs to be five rounds long
for (let i = 0; i < 5; i++) 
{
    game();
}



