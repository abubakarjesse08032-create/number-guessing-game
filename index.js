function startGame(){
  let answer = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let guess;

  while(true){
    guess = prompt("Guess a number between 1 and 10");
    guess = Number(guess);

    if(isNaN(guess)){
      alert("Enter a number!");
      continue;
    }

    attempts++;

    if(guess > answer){
      alert("Too high! Try again");
    }
    else if(guess < answer){
      alert("Too low! Try again");
    }
    else{
      alert(`Correct! It took you ${attempts} attempts`);
      break;
    }
  }
}
