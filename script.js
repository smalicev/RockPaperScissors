
const choices = ['Rock','Paper','Scissors'];
let shoes = "4";

function computerPlay(){
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function playerPlay(){
    playerChoice = prompt("Please select between rock, paper, and scissors");
    computerPlay()
    switch(playerChoice){
        case 'Rock':
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
    }
}
