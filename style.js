document.getElementById('roll-button').addEventListener('click', function() {
    const dice = document.getElementById('dice');
    const diceValue = document.getElementById('dice-value');

    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Display the dice value
    diceValue.textContent = randomNumber;
});
