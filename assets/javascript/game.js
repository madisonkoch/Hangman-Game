'use strict';
//Variables
    let guess;
    let guessedLetters;
    let newWordRandomArrayBlank;
    let wins = 0;
    let losses = 0;
    let gamesPlayed;
    let wordBank = [
        "bradford",
        "diggs",
        "griffen",
        "keenum",
        "murray",
        "rhodes",
        "rudolph",
        "treadwell",
        "zimmer",
        "wilf",
        "gedeon",
    ];
    let startingGuesses;
    let currentRandom; 
    let wordRandomArray;
    let wordRandomArrayComp;
    let wordRandomArrayBlank;
    const remainingGuesses = function(){
        (startingGuesses - guessedLetters.length);
        document.querySelector('#guessesRemaining').innerHTML = (startingGuesses - guessedLetters.length);
        return (startingGuesses - guessedLetters.length);
    } 
    const changeBlanksToLetters = function(D){ //Change correct guess from blank to letter
        for (let i = 0; i < wordRandomArray.length; i++){
            if (wordRandomArray[i] === D){
                newWordRandomArrayBlank[i] = D;
            } else if (wordRandomArray[i] !== newWordRandomArrayBlank[i])
                newWordRandomArrayBlank[i] = "_";
        };
        return newWordRandomArrayBlank.join(" ");
    };
    const runningWordBank = function remove(wordBank, currentRandom) {
            const index = wordBank.indexOf(currentRandom);
            if (index !== -1) {
                wordBank.splice(index, 1);
            }
            return wordBank;
        };

//Initial State of every game
    const initialGameState = function(){
        startingGuesses = 14;
        guessedLetters=[];
        newWordRandomArrayBlank = [];
        gamesPlayed=(wins + losses);
        currentRandom = wordBank[Math.floor(Math.random() * wordBank.length)];
        wordRandomArray = Array.from(currentRandom);
        wordRandomArrayComp = wordRandomArray.join(" ");
        wordRandomArrayBlank = [];
            for (let i = 0; i < wordRandomArray.length; i++) {
            wordRandomArrayBlank[i] = "_";
            }
        wordBank = runningWordBank(wordBank, currentRandom);
        //Display in console: 
            console.log(wordBank);
            console.log(gamesPlayed);
            console.log(currentRandom); //show random word as string
            console.log(wordRandomArrayBlank);
        //Display on page at start:
            document.querySelector('#wordBlanksHere').innerHTML = wordRandomArrayBlank.join(" ");
            document.querySelector('#guessesRemaining').innerHTML = startingGuesses;
            document.querySelector('#wins').innerHTML = wins;
            document.querySelector('#losses').innerHTML = losses;
            document.querySelector('#guessesMade').innerHTML= guessedLetters.join(" ");
            document.querySelector('#wordBlanksHere').innerHTML = changeBlanksToLetters();
    
            
    }
    initialGameState();

//Keystroke loop
    document.onkeyup = function(){
        const guess = event.key; //assign each keystrok to the variable guess
        if (!guessedLetters.includes(guess)){  //if letter has already been guessed don't display put it in guessedLetters again (display code below).
            guessedLetters.push(guess)
        };
        changeBlanksToLetters(guess); //changes _ to letter
    //Display in console
        console.log(guess,' : ', changeBlanksToLetters(guess));

    //Display in specific html element
        document.querySelector('#guessesMade').innerHTML= guessedLetters.join(" ");
        document.querySelector('#wordBlanksHere').innerHTML = changeBlanksToLetters();

    //Next game?
        winLossUpdate(guess);
        nextGameAlert(guess);
        if (gamesPlayed <= 9){
            if (remainingGuesses(guess) === 0 || changeBlanksToLetters(guess) === wordRandomArrayComp){
                initialGameState(guess);
            }
        }    
    //End?
        gameOver();
    //Style
        picChange();
}
// Next game functions:
    //Win Loss Update:
        const winLossUpdate = function(G){
            if (changeBlanksToLetters(G) === wordRandomArrayComp) {
                wins++;
                document.querySelector('#wins').innerHTML = wins;
            }
            else if (remainingGuesses(G) === 0){
                losses++;
                document.querySelector('#losses').innerHTML = losses;
            };
        }
    //Win Loss Alert
        const nextGameAlert = function(H){
            if (changeBlanksToLetters(H) === wordRandomArrayComp) {
                alert('SKOL! You got that one, ready for the next?');
            }
            else if (remainingGuesses(H) === 0){
                alert('You fumbled that one, best of luck on the next person.');
            };
        }
//Game Over
    const gameOver = function(){
        if (gamesPlayed === 10){
            if (wins === 0 || wins === 1 || wins === 2){
                alert(`${wins} correct`);
            }
            else if (wins === 3 || wins === 4){
                alert(`${wins} correct`);
            }
            else if (wins === 5 || wins === 6){
                alert(`${wins} correct`);
            }
            else if (wins === 7 || wins === 8){
                alert(`${wins} correct`);
            }
            else {
                alert(`${wins} correct`);
            }
        }
    }
//Style
    const pic = document.getElementById('pic');
    const picChange = function(){
        if (currentRandom === 'wilf' || currentRandom === 'treadwell' || currentRandom === 'diggs'){
            pic.src = `./assets/images/${currentRandom}.jpg`
        }
        else{
            pic.src = `./assets/images/${currentRandom}.png`     
        }
    }
