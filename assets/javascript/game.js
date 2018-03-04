'use strict';
//Variables
    let guess;
    let guessedLetters=[];
    let newWordRandomArrayBlank = [];
    let wins = 0;
    let losses = 0;
    const wordBank = [
        "bradford",
        "diggs",
        "griffen",
        "keenum",
        "murray",
        "rhodes",
        "rudolph",
        "treadwell",
    ];
    const startingGuesses = 13;
    let currentRandom = wordBank[Math.floor(Math.random() * wordBank.length)]; 
    let wordRandomArray = Array.from(currentRandom);
    let wordRandomArrayComp = wordRandomArray.join(" ");
    let wordRandomArrayBlank = [];
        for (let i = 0; i < wordRandomArray.length; i++) {
        wordRandomArrayBlank[i] = "_";
        }


//Display in console: 
    console.log(currentRandom); //show random word as string
    console.log(typeof wordRandomArray, wordRandomArray);//show random word as an array
    console.log(wordRandomArrayBlank);

//Display on page at start:
    document.querySelector('#wordBlanksHere').innerHTML = wordRandomArrayBlank.join(" ");
    document.querySelector('#guessesRemaining').innerHTML = startingGuesses;
    document.querySelector('#wins').innerHTML = wins;
    document.querySelector('#losses').innerHTML = losses;


//Keystroke loop
    document.onkeyup = function(){
        const guess = event.key; //assign each keystrok to the variable guess
        if (!guessedLetters.includes(guess)){  //if letter has already been guessed don't display put it in guessedLetters again (display code below).
            guessedLetters.push(guess)
        };
        changeBlanksToLetters(guess); //changes _ to letter
        
        if (remainingGuesses(guess) === 0 || changeBlanksToLetters(guess) === wordRandomArrayComp) {
            nextGame(guess);
        };


    //Display in specific html element
        displayGuesses();
        displayNewBlanks(guess);

    //Display in console
        console.log(guess,' : ', changeBlanksToLetters(guess));
    }

// Functions called in Keystrok Loop
    //Display:
        //Guesses made:
            const displayGuesses = function(){
                document.querySelector('#guessesMade').innerHTML= guessedLetters.join(" ");
            }
        //Correct guesses + blanks:
            const displayNewBlanks = function(F){
                document.querySelector('#wordBlanksHere').innerHTML = changeBlanksToLetters(F);
            }

    //Change Blanks to Letters
        //Change correct guess from blank to letter
        const changeBlanksToLetters = function(D){
            for (let i = 0; i < wordRandomArray.length; i++){
                if (wordRandomArray[i] === D){
                    newWordRandomArrayBlank[i] = D;
                } else if (wordRandomArray[i] !== newWordRandomArrayBlank[i])
                    newWordRandomArrayBlank[i] = "_";
            };
            return newWordRandomArrayBlank.join(" ");
        };

        //Remaining Guesses
        const remainingGuesses = function(){
            (startingGuesses - guessedLetters.length);
            document.querySelector('#guessesRemaining').innerHTML = (startingGuesses - guessedLetters.length);
            return (startingGuesses - guessedLetters.length);
        }
            

//Needed for reset:
    const wordRandom = function(){
        wordBank[Math.floor(Math.random() * wordBank.length)];
    }

//Next Game:
    const nextGame = function(G){
        if (changeBlanksToLetters(G) === wordRandomArrayComp) {
            wins++;
            document.querySelector('#wins').innerHTML = wins;
            reset();
        }
        else if (remainingGuesses(guess) === 0){
            losses++;
            document.querySelector('#losses').innerHTML = losses;
            reset();
        };
    }

//Global Reset
    const reset = function(){
        //starting guesses count
        //guessed letters
        //new random word
        //reset blanks

    }