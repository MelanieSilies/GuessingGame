function randomNum(max = 10) {
    // generate a random number between 1 and 10
    return Math.floor(Math.random() * max) + 1;
  }
  
  
  
  function guessingGame() {
    let counter = 3;
    const level = parseInt(prompt(`Choose a level: \n1. Level 1 (1-10) \n2. Level 2 (1-25)\n3. Level 3 (1-99)`));
    let max = 10;
    if (level === 2) {
      max = 25;
    }
    else if( level === 3){
      max = 99;
    }
    const randomNumber = randomNum(max);
    const userName = prompt(`What's your Name?`);
    while (counter > 0) {
      const guess = parseInt(prompt(`Hey ${userName}! Guess a number between 1 and ${max}`));
      if (guess === randomNumber) {
        alert(`Success! The Number was ${randomNumber}! Attempts needed: ${4 - counter}`);
        return;
      } else {
        counter--;
        if (counter < 1) {
          alert(`Sorry, you failed to guess the number in three attempts. The correct number was ${randomNumber}.`);
        } else if (guess > randomNumber) {
          alert(`Wrong. Try again! You have ${counter} guesses left. The correct Number is lower`);
        } else if (guess < randomNumber) {
          alert(`Wrong. Try again! You have ${counter} guesses left. The correct Number is higher`);
        }
      } 
    }
  };
  
  guessingGame();
  