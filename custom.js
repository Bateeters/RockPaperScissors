function getComputerChoice(){
    const choices = ["rock", "paper","scissors"]; // define the array of choices

    // Math.random() to generate a random number between 0 and 1
    // let a = Math.random();
    // console.log(a);

    // Multiply this number by the length of the array using the choices.length property
    // let b = a*choices.length;
    // console.log(b);

    // Math.floor() function to round down the decimal to the nearest whole number to give valid index in array.
    // let c = Math.floor(b);
    // console.log(c);
    // console.log(choices[c]);
    
    // All above steps inside one line and value returned
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];  
    return computerChoice;
}

function playGame(playerSelection, computerSelection){
    let results;
    if (playerSelection === "rock"){ // code for if player picked rock
        if  (computerSelection === "paper") {
            results = "You lose! Paper beats Rock.";
        } else if (computerSelection === "scissors") {
            results = "You Win! Rock beats Scissors.";
        } else {
            results = "It's a tie, you both picked Rock.";
        }
    } else if (playerSelection === "paper") { // code for if player picked paper
        if  (computerSelection === "scissors") {
            results = "You lose! Scissors beats Paper.";
        } else if (computerSelection === "rock") {
            results = "You Win! Paper beats Rock.";
        } else {
            results = "It's a tie, you both picked Paper.";
        }
    } else if (playerSelection ==="scissors"){ // code for if player picked scissors
        if  (computerSelection === "rock") {
            results = "You lose! Rock beats Scissors.";
        } else if (computerSelection === "paper") {
            results = "You Win! Scissors beats Paper.";
        } else {
            results = "It's a tie, you both picked Scissors.";
        }
    } else { // code for if player did not enter rock, paper, or scissors
        results = "You did not pick rock, paper, or scissors. You automatically lost!"
    }
    return results
}

const buttons = document.querySelectorAll("button");
let result = ''

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
// and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        result = playGame(button.id, getComputerChoice());
        console.log(result);
    });
});

const resultDisplay = document.createElement('div');