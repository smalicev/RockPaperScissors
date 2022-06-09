

const choice = document.querySelector('.btn');

choice.forEach(Listening(btn));

function Listening(btn){
    btn.addEventListener('click', function(e){
        console.log(e.target)
    });
}

const choices = ['Rock','Paper','Scissors'];
let pOne = 0;
let pTwo = 0;

/* Function that will choose a move for the computer and return the choice*/
function computerPlay(){
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

/* Function that will prompt user for text input choice and return the choice*/
function playerPlay(){
    playerChoice = prompt("Please select between rock, paper, and scissors").toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}

/* Function that will decide the winner of the game between two players, decision logic of rock-paper-scissors*/
function decideWinner(playerOne,playerTwo){
    switch(playerOne){
        case 'rock':
            if (playerTwo == 'Rock'){
                console.log("Draw!");
            }
            else if (playerTwo == 'Scissors'){;
                console.log("Player One Wins!");
                return pOne ++;
            }
            else{
                console.log("Player One Loses!");
                return pTwo ++;
            }
            break;
        case 'scissors':
            if (playerTwo == 'Scissors'){
                console.log("Draw!");
            }
            else if (playerTwo == 'Paper'){
                console.log("Player One Wins!");
                return pOne ++;
            }
            else{
                console.log("Player One Loses!");
                return pTwo ++;
            }
            break;
        case 'paper':
            if (playerTwo == 'Paper'){
                console.log("Draw!");
            }
            else if (playerTwo == 'Rock'){
                console.log("Player One Wins!");
                return pOne ++;
            }
            else{
                console.log("Player One Loses!");
                return pTwo ++;
            }
            break;

        }

    }

/* Function that will 1. Defines score counter, plays for 5 rounds or untill
                         player one or two win 3 rounds

                      2. (f) Prompt player choice;
                         (f) Randomly select computer choice;
                         (f) Decide the winner and return the result 
*/

function game(){
    for (i = 0; i < 5; i++) {
    computerPlay();
    playerPlay();
    decideWinner(playerChoice,computerChoice);
    console.log(pOne);
    console.log(pTwo);
    if (pOne == 3 || pTwo == 3 || i == 5) break;
    }
    if (pOne > pTwo){
        console.log("Player One wins the game!");
        return [pOne, pTwo] = [0,0];
    }
    else {
        console.log("Player Two wins the game!");
        return [pOne, pTwo] = [0,0];
    }
}

/* Important lesson for me:
If you define the score counter in the function, i.e.:

function game(){
    let pOne = 0;
    let pTwo = 0;
    ...
}

The rest of the function will always evaluate it as 0 despite
it being BEFORE your loop that is supposed to increase it by 1.

Or maybe because called ++ functions return something that increases
the GLOBAL counter ?

At the end of the game you have to reset the global counter if
this is the case.

Another important note:

A 'return' will return out of the whole thing (any parent functions). a break will get you out of
a loop or switch

*/
