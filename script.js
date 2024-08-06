console.log('Hello world!');

// function to get random computer choice
function getComputerChoice(){
    let choice;

    let randomNum = Math.floor(Math.random() * 3) + 1;

    if(randomNum === 1){
        choice = 'rock';
    } else if(randomNum === 2){
        choice = 'paper';
    } else{
        choice = 'scissors';
    }
    console.log(`computer > ${choice}`);
    return choice;

}

// function to get human choice from prompt input
function getHumanChoice(){
    let choice = prompt('Choose rock, paper or scissors');
    if(choice === ''){
        alert('Enter input');
        return choice = prompt('Choose rock, paper or scissors');
    } 

    console.log(`You > ${choice}`);

    return choice;
}

// function to play a game of five rounds
function playGame(){
    
    //Declare two variables computer score and human score to hold the score of each round
    let computerScore = 0;

    let humanScore = 0;

    //Declare a function playRound to play a single round of the game with two parameters
    function playRound(human, computer){
        let humanChoice = human().toLowerCase();

        let computerChoice = computer();
    
        if(humanChoice === computerChoice){
    
            alert(`Draw ${humanChoice} is equal to ${computerChoice}`); 
    
        } else if((humanChoice === 'rock' && computerChoice === 'paper') |
        (humanChoice === 'paper' && computerChoice === 'scissors') |
        (humanChoice === 'scissors' && computerChoice =='rock')){
    
            alert(`You lose ${humanChoice} loses to ${computerChoice}`); 
            ++computerScore;
    
        } else if((humanChoice === 'rock' && computerChoice === 'scissors') |
        (humanChoice === 'paper' && computerChoice === 'rock') |
        (humanChoice === 'scissors' && computerChoice === 'paper')){
    
            alert(`You win ${humanChoice} beats ${computerChoice}`); 
            ++humanScore;
        } else{
    
            alert('Invalid input'); 
        }

        console.log(`computer ${computerScore} vs You ${humanScore}`);
    }

    //A for loop to playRound function five times
    for(let i = 1; i < 6; i++){

        //call the playRound function with two functions as arguments 
        playRound(getHumanChoice, getComputerChoice);
        
    }

    //condition to display winner of the game in five rounds
    if(humanScore < computerScore){
        alert('SORRY YOU LOST'); 

        alert(`You: ${humanScore} VS Computer: ${computerScore}`); 

    } else if(humanScore > computerScore){
        
        alert('CONGRATULATIONS! YOU WON'); 

        alert(`You: ${humanScore} VS Computer: ${computerScore}`);

    } else{
        alert('DRAW');

        alert(`You: ${humanScore} VS Computer: ${computerScore}`);
    }

}

playGame();


