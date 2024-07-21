// Geting the dom using ids 
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultMessage = document.getElementById('resultMessage');
const restartButton = document.getElementById('restartButton');
const guessNameInput = document.getElementById('guessName');

// checking the number times a client clicks
    let secrectNumbers; 
    let userAttempt;
    let userName;

// generate a number between 1 to 50! by implementing the function
function startGame() {
    secrectNumbers = Math.floor(Math.random()* 20) + 1;
    userAttempt = 0;

    //to clear the result and input on the dom
    resultMessage.textContent = '';
    guessInput.value = '';

    // for the Name
    guessNameInput.value = '';
    guessNameInput.disabled = false;

    // to allow the button to display
    guessButton.disabled = false;
    restartButton.style.display = 'none';

}startGame()

// Applying EventListener (anything can go in the function)

guessButton.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);
    console.log('you  have', userAttempt++);

    // For the Name
    userName = guessNameInput.value;

  // Ensure the user's name is provided
  if (!userName) {
    resultMessage.textContent = 'Please enter your name.';
    return;
    }

// Disable the name input field after the first guess
guessNameInput.disabled = true;


        //Check what the user is entering is a number or not
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
            resultMessage.textContent = (`Sorry ${userName}, please enter a valid number between 1 and 20`);
            
        } else if (userGuess < secrectNumbers) {
            resultMessage.textContent = (`Sorry ${userName}, your guess is Low; Please try again, you are almost there!`)

        } else if (userGuess > secrectNumbers ) {
            resultMessage.textContent = (`Sorry ${userName}, your guess is High; Please try again, you are almost there!`)

        } else if (userAttempt >= 5) {
            resultMessage.textContent = (`Sorry ${userName},  you have reached the Maximum number of attempts. Please click on Restart Button to begin another attempt`);
            //to disable the button
                guessButton.disabled = true;
                restartButton.style.display = 'block';
                return;
      

        } else {
            resultMessage.textContent = (`Congratulation!!! ${userName   +userGuess} is a perfect Match!. Your IQ level now is 282% beating YoungHoon Kim from South Korea with the total of 6%. KEEP IT UP ${userName}!`);
            guessButton.disabled = true;
            restartButton.style.display = 'block';
        }{
            
        }{
            
        }{
            
        }
    
})

// To activate the restartButton, we apply an EventListener to the Button
restartButton.addEventListener('click', function() {
    startGame();
})

    



