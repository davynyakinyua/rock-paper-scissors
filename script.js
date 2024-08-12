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
    choiceComp.textContent = `computer : ${choice}`;
    return choice;

};

//create a div on the dom to display the messages currently on the logs
const content = document.querySelector('.content');
const div = document.createElement('div');
const choiceComp = document.querySelector('.computerChoice');
const choiceHum = document.querySelector('.humanChoice');
const result = document.createElement('div');
const final = document.createElement('div');




//Declare two variables computer score and human score to hold the score of each round
let computerScore = 0;

let humanScore = 0;

// function to play a game of five rounds
function playGame(){
    
    

    //Declare a function playRound to play a single round of the game with two parameters
    function playRound(human, computer){
        let humanChoice = human;

        let computerChoice = computer();
    
        if(humanChoice === computerChoice){
    
            div.textContent = `Draw ${humanChoice} is equal to ${computerChoice}`;
            content.appendChild(div);
    
        } else if((humanChoice === 'rock' && computerChoice === 'paper') |
        (humanChoice === 'paper' && computerChoice === 'scissors') |
        (humanChoice === 'scissors' && computerChoice =='rock')){
    
            div.textContent = `You lose ${humanChoice} loses to ${computerChoice}`;
            content.appendChild(div);
            ++computerScore;
    
        } else if((humanChoice === 'rock' && computerChoice === 'scissors') |
        (humanChoice === 'paper' && computerChoice === 'rock') |
        (humanChoice === 'scissors' && computerChoice === 'paper')){
    
            div.textContent = `You win ${humanChoice} beats ${computerChoice}`; 
            content.appendChild(div);
            ++humanScore;
        } else{
    
            div.textContent = 'Invalid input';
            content.appendChild(div);
        }

        result.textContent = `computer ${computerScore} vs You ${humanScore}`;
        content.appendChild(result);

    }; 
    
    // logic to get human choice from button click and call playRound
    const buttons = document.querySelectorAll('button');

    buttons.forEach(getHumanChoice);

    function getHumanChoice(button){
    
        button.addEventListener('click', (event) => {
        console.log(event.target.id);

        let choice = event.target.id;

        choiceHum.textContent = `You : ${choice}`;
        
        if((humanScore < 5) || (computerScore < 5)){

            playRound(choice, getComputerChoice)

        } else if((humanScore === 5) || (computerScore === 5)){
            //condition to display winner of the game in five rounds
            if((humanScore < 5) && (computerScore === 5)){
                final.textContent = 'SORRY YOU LOST'; 
                content.appendChild(final);
            
                } else if((humanScore === 5) && (computerScore < 5)){
            
                final.textContent = 'CONGRATULATIONS! YOU WON'; 
                content.appendChild(final);
            
                } else if(humanScore === computerScore){
            
                final.textContent = 'DRAW -now';
                content.appendChild(final);
            
                } else{
            
                console.log('click one of the button to play game');
            
                };
        
        };
        
        
        
        });

    };
        

};



playGame();

// get the game to stop after first one to get 5 points