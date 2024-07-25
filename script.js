console.log('Hello world');



/* Declare two variables humanScore and computerScore to keep track of the scores whose value is 0*/

let humanScore = 0;

let computerScore = 0;

/*Logic to play the entire game*/
/*Declare a new function playGame*/
/*Declare humanSelection value of getHumanChoice and computerSection value of getComputerChoice*/
/*move the function playRound into the function playGame*/
/*call the playGame function 5 times to play five rounds*/
/*if computerScore is greater than humanScore output 'You lose! Your Score vs computer score*/
/*else if humanScore is greater than computerScore output 'You Win! your score vs computer score'*/
/*else output 'Draw! your score vs computer score'*/

function playGame(){

        /* Declare a function getComputerChoice that returns computer choice */
        /*Declare a variable choice */
        /* Declare a variable randomNum which outputs a random number between 1 - 3. */
        /* if randomNum equals one then choice is equal to 'rock'*/
        /* else if randomNum equals to two then choice equals to 'paper'*/
        /* else choice equals to 'scissors'*/
        /* Return choice*/


        function getComputerChoice(){

            let choice;

            const randomNum = Math.floor(Math.random() * 3) + 1;

            if(randomNum === 1){
            choice = 'rock';
            }else if(randomNum === 2){
            choice = 'paper';
            }else{
            choice = 'scissors';
            }

            return choice;

        }

        /*Declare a function that returns human choice getHumanChoice */
        /* Declare a variable choice*/
        /* Return choice*/

        function getHumanChoice(){
            let choice = prompt('Choose one of the three "Rock", "Paper" or "Scissors"');

            if(choice === ''){

            choice = prompt('Choose one of the three "Rock", "Paper" or "Scissors"');
            }

            console.log(choice);

            return choice;
        }

    /* Declare two variables humanSelection and computerSelection that are going to be arguments for playRound*/
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice();

    

    
    /*Algorithm to play a single round*/
    /* Declare a function playRound*/
    /* Define two parameters for playRound: humanChoice and computerChoice that take getHumanChoice
    and getComputerChoice as arguments*/

    function playRound(humanChoice, computerChoice){

        if((humanChoice === 'rock' && computerChoice === 'rock') | 
            (humanChoice === 'paper' && computerChoice === 'paper') |
            (humanChoice === 'scissors' && computerChoice === 'scissors')){

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
            }  else{

            alert('Invalid input');

        }

    }

    console.log(humanScore);
    console.log(computerScore);


    playRound(humanSelection, computerSelection);
    
    

}
    



for(let i = 1; i < 6; i++){
    playGame();
}



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