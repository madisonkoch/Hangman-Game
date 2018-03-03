'use strict';

const words = [
    "bradford",
    "diggs",
    "griffen",
    "keenum",
    "murray",
    "rhodes",
    "rudolph",
    "treadwell",
];

const randomWord = words[Math.floor(Math.random() * words.lenth)];

const wordBlanks = [];
for (let i = 0; i < randomWord.length; i++){
    wordBlanks[i] = "_";
}

