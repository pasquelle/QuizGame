const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!");

let value = prompt("Enter Something: ");
let correctAnswers = 0;
const totalQuestions = 3;


const answer1 = prompt("What is the brain of the computer? ");
const correctAnswer1 = "CPU";

if (answer1.toUpperCase() === correctAnswer1) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Nope!")
}

const answer2 = prompt("What's better, a 3090ti or a 4060? ");
const correctAnswer2 = "3090ti";

if (answer2.toLowerCase() === correctAnswer2) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Nope!")
}

const answer3 = prompt("Which is a newer type of hard-drive, SSD or HDD? ");
const correctAnswer3 = "SSD";

if (answer3.toUpperCase() === correctAnswer3) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Nope!")
}

let percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You scored", percent.toString() + "%, with", correctAnswers, "out of", totalQuestions, "questions correct!");

