var userInput = prompt("Choose (Rock, Paper, or Scissors)");
var computerInput = ["rock", "paper", "scissors"];
var rng = Math.floor(Math.random() *3);



if (userInput === computerInput[rng]) {
  alert("You tied!")
} else if (
    userInput.toLowerCase() === "rock" && computerInput[rng].toLowerCase() === "paper" ||
    userInput.toLowerCase() === "paper" && computerInput[rng].toLowerCase() === "scissors" ||
    userInput.toLowerCase() === "scissors" && computerInput[rng].toLowerCase() === "rock") {
  alert("You Lose ---- :(");
} else {
  alert("You Won ---- :)")
}
