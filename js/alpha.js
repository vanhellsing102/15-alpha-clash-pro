function playAgain(){
    hiddenElement('score');
    showElement('play-ground');

    const resetScore = document.getElementById('score-id');
    resetScore.innerText = '0';

    const resetLife = document.getElementById('life-id');
    resetLife.innerText = '5';

}


document.addEventListener('keyup', function(event){
    const playerPressed = event.key;
    
    if (playerPressed === 'Escape') {
        hiddenElement('play-ground');
        showElement('score');
    }

    const alphabet = document.getElementById('randomText');
    const currentAlphabet = alphabet.innerText.toLowerCase();

    if (playerPressed === currentAlphabet){
        removeBgColor(playerPressed);
        playing();

        // update score***
        const score = document.getElementById('score-id');
        const scoreNumber = Number(score.innerText);
        const finalValue = scoreNumber + 1;
        score.innerText = finalValue;

        const finalScore = document.getElementById('final-score');
        finalScore.innerText = finalValue;
    }
    else {
        const life = document.getElementById('life-id');
        const lifeNumber = Number(life.innerText);
        life.innerText = lifeNumber - 1;

        if (lifeNumber === 0) {
            hiddenElement('play-ground');
            showElement('score');
        }
    }
});



function playing(){
    const randomAlphabet = gameLoop();

    const randomValue = document.getElementById('randomText');
    randomValue.innerText = randomAlphabet;

    addBgColor(randomAlphabet);
};



function play(){
    hiddenElement('home');
    showElement('play-ground');
    playing();
};


