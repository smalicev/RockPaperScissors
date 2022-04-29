
const choices = ['Rock','Paper','Scissors'];
let shoes = "4";

/* Function that will choose a move for the computer and return the choice*/
function computerPlay(){
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

/* Function that will 1. ask user to choose a move, run the computers choice, then decide
the winner and output the results. 
Important: this function has a new computer choice each time it is run */

function game(){
    let compscore = 0
    let playerscore = 0
    let i = 0
    for (i<5; i++){


function playerPlay(){
    playerChoice = prompt("Please select between rock, paper, and scissors").toLowerCase();
    console.log(playerChoice);
    computerPlay()
    switch(playerChoice){
        case 'rock':
            if (computerChoice == 'Rock'){
                console.log(computerChoice);
                console.log(playerChoice);
                console.log("Draw!");
            }
            else if (computerChoice == 'Scissors'){
                console.log(computerChoice);
                console.log(playerChoice);
                console.log("You Win!");
            }
            else{
                console.log(computerChoice);
                console.log(playerChoice);
                console.log("You Lose!");
            }
            break;
        case 'scissors':
            if (computerChoice == 'Scissors'){
                console.log(computerChoice);
                console.log(playerChoice);
                console.log("Draw!");
            }
            else if (computerChoice == 'Paper'){
                console.log(computerChoice);
                console.log(playerChoice);
                console.log("You Win!");
            }
            else{
                console.log(computerChoice);
                console.log(playerChoice);
                console.log("You Lose!");
            }
            break;
        case 'paper':
            if (computerChoice == 'Paper'){
                    console.log(computerChoice);
                    console.log(playerChoice);
                    console.log("Draw!");
            }
            else if (computerChoice == 'Rock'){
                    console.log(computerChoice);
                    console.log(playerChoice);
                    console.log("You Win!");
            }
            else{
                    console.log(computerChoice);
                    console.log(playerChoice);
                    console.log("You Lose!");
            }
            break;
    }
}
}
}
