// Generate a random number between 1 and 10
let answer = Math.floor(Math.random() * 10) + 1;

// Keep track of number of attempts
let attempts = 0;

// Variable to store user guess
let guess;

// Main game loop function
function startGame() {
  while(true){
    // Ask user for input
    guess = prompt("Guess a number between 1 and 10");
    
    // Convert input to number
    guess = Number(guess);

    // If input is not a number, show alert and continue
    if(isNaN(guess)){
      alert("Enter a number🔢!");
      continue; // go to next iteration of loop
    }

    // Increment attempts
    attempts++;

    // Check if guess is too high
    if(guess > answer){
      alert("Too high⬆️! Try again");
    }
    // Check if guess is too low
    else if(guess < answer){
      alert("Too low⬇️! Try again");
    }
    // Correct guess
    else{
      alert(`Correct🎉! It took you ${attempts} attempts`);
      break; // exit the loop
    }
  }
}