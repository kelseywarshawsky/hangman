// Creates an array that lists out all of the options of animals.
var computerChoices = ["elephant", "giraffe", "rhino", "lion", "tiger", "bear", "koala", "warthog"];
var choicesImages = ["../images/elephant.png", "../images/giraffe.png", "../images/rhino.png", "../images/lion.png", "../images/tiger.png", "../images/bear.png", "../images/koala.png", "../images/warthog.png"];
var wins = 0;
var losses = 0;
var guesses = 5;
var userWork = [];
var wrongLetters = [];
var wordPrint = false;
var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var letterInWord = false;
var computerLetters = computerWord.split('')

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var wrongText = document.getElementById("wrong-text");
var guessesText = document.getElementById("guesses-text");
var workText = document.getElementById("work-text");

function printWord() {
  userWork = [];
  for (var i = 0; i < computerLetters.length; i++) {
    if (wordPrint === false) {
      userWork.push(" _ ");
    }
    wordPrint === true
    workText.textContent = userWork;
  }

}

function match(userGuess) {
  for (var i = 0; i < computerLetters.length; i++) {
    if ((userGuess === computerLetters[i])) {
      userWork[i] = userGuess;
      letterInWord === true;
      console.log("matched letter")
    } else if ((userGuess !== computerLetters[i])) {
      console.log("mismatch" + letterInWord)
    }
  }
    if (letterInWord === false) {
      guesses--
      wrongLetters.push(event.key)
    }
  }

function win(guesses, losses, wrongLetters, userWork, computerWord) {
if (userWork === computerWord) {
  guesses = 5;
  wins++
  wrongLetters = [];
  computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerLetters = computerWord.split('')
  for (var i = 0; i < computerLetters.length; i++) {
    userWork.push("_ ")
  }
  alert("you've won!")
} else if (userWork !== computerWord) {
  console.log("didn't win")
  }
}

function lose(guesses, losses, wrongLetters, userWork) {
if (guesses < 1) {
  guesses = 5;
  losses++
  wrongLetters === [];
  userWork === [];
  computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerLetters = computerWord.split('')
  alert("you lost!")
} else if (guesses > 1) {
  console.log("enough guesses to continue")
}
}

function populateText(wins, losses, guesses, wrongLetters, userWork) {
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesText.textContent = "guesses: " + guesses;
  wrongText.textContent = wrongLetters;
  workText.textContent = userWork;

}

document.onkeyup = function (event) {
  var userGuess = event.key;

  printWord(letterInWord);
  populateText(wins, guesses, losses, wrongLetters, userWork);
  match();
  win(guesses, losses, wrongLetters, userWork, computerWord);
  lose(guesses, losses, wrongLetters, userWork);




}