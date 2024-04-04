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

let pScore = 0;
let cScore = 0;
let tieScore = 0;

function playGame(playerSelection, computerSelection){
    let results;
    if (playerSelection === "rock"){ // code for if player picked rock
        if  (computerSelection === "paper") {
            results = "You lose! Paper beats Rock.";
            cScore++;
        } else if (computerSelection === "scissors") {
            results = "You Win! Rock beats Scissors.";
            pScore++;
        } else {
            results = "It's a tie, you both picked Rock.";
            tieScore++;
        }
    } else if (playerSelection === "paper") { // code for if player picked paper
        if  (computerSelection === "scissors") {
            results = "You lose! Scissors beats Paper.";
            cScore++;
        } else if (computerSelection === "rock") {
            results = "You Win! Paper beats Rock.";
            pScore++;
        } else {
            results = "It's a tie, you both picked Paper.";
            tieScore++;
        }
    } else if (playerSelection ==="scissors"){ // code for if player picked scissors
        if  (computerSelection === "rock") {
            cScore++;
            results = "You lose! Rock beats Scissors.";
        } else if (computerSelection === "paper") {
            results = "You Win! Scissors beats Paper.";
            pScore++;
        } else {
            results = "It's a tie, you both picked Scissors.";
            tieScore++;
        }
    } else { // code for if player did not enter rock, paper, or scissors
        results = "You did not pick rock, paper, or scissors. You automatically lost!"
    }
    return results
}

const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector("#resultsText");
const playerChoice = document.querySelector("#playerChoice");
const scoreCard = document.querySelector("#scoreCard");
const computerChoice = document.querySelector("#computerChoice");
const btnContainer = document.querySelector("#btnContainer");

const playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "Play Again?";


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
// and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        const playerBtn = button.id;
        const computerSelection = getComputerChoice();
        const result = playGame(playerBtn, computerSelection);
        playerChoice.textContent = `Your Choice: ${playerBtn}`;
        computerChoice.textContent = `Computer's Choice: ${computerSelection}`;
        resultDisplay.textContent = result;
        scoreCard.textContent = `Win: ${pScore} -- Tie: ${tieScore} -- Loss: ${cScore}`;

        if (pScore == 5){
            scoreCard.textContent = 'You beat the computer!';
            document.querySelector("#rock").remove();
            document.querySelector("#paper").remove();
            document.querySelector("#scissors").remove();
            document.querySelector("body").insertBefore(playAgainBtn, btnContainer);
        } else if (cScore == 5){
            scoreCard.textContent = 'The computer won this time.';
            document.querySelector("#rock").remove();
            document.querySelector("#paper").remove();
            document.querySelector("#scissors").remove();
            document.querySelector("body").insertBefore(playAgainBtn, btnContainer);
        }
    });
});

playAgainBtn.addEventListener('click', () =>{
    window.location.reload();
})