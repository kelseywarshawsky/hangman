// Creates an array that lists out all of the options of animals.
var computerChoices = ["elephant", "giraffe", "rhino", "lion", "tiger", "bear", "koala", "warthog"];
var choicesImages = ["../images/elephant.png", "../images/giraffe.png", "../images/rhino.png", "../images/lion.png", "../images/tiger.png", "../images/bear.png", "../images/koala.png", "../images/warthog.png"];
var wins = 0;
var losses = 0;
var guesses = 5;
var userWork = [];
var userMessage = "Temp"
var wrongLetters = [];
var wordPrint = false;
var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var computerLetters = computerWord.split('')

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var wrongText = document.getElementById("wrong-text");
var guessesText = document.getElementById("guesses-text");
var workText = document.getElementById("work-text");

function gottaString() {
  displayWord = userWork.join("");
  checkWin = computerLetters.join("");

}

function printWord() {
    if (wordPrint === false) {
      for (var i = 0; i < computerLetters.length; i++) {
      userWork.push(" _ ");
      wordPrint = true
      }
    }
    else {
      console.log("not printing")
    }
  }


function match(userGuess) {
  var letterInWord = false;
  for (var i = 0; i < computerLetters.length; i++) {
    if ((userGuess === computerLetters[i])) {
      userWork[i] = userGuess;
      letterInWord = true;
    } else if ((userGuess !== computerLetters[i])) {
      console.log("mismatch" + letterInWord)
    }
  }
    if (letterInWord === false) {
      guesses--
      wrongLetters.push(event.key)
    }
  }

function win() {
  gottaString();
if (displayWord === checkWin) {
  userMessage = "You win! The word was " + computerWord
  guesses = 5;
  wins++
  wrongLetters = [];
  userWork = [];
  computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerLetters = computerWord.split('')
  wordPrint = false;
  printWord();
  $('#modal').modal('show')
} else if (userWork !== computerWord) {
  userMessage = "nothing"
  }
}

function lose() {
if (guesses < 1) {
  userMessage = "You lost! The word was " + computerWord
  guesses = 5;
  losses++
  wrongLetters = [];
  userWork = [];
  wordPrint = false; 
  $('#modal').modal('show')
  computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerLetters = computerWord.split('')
  
} else if (guesses > 1) {
  userMessage = "nothing"
}
}

function populateText() {
  gottaString();
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesText.textContent = "guesses: " + guesses;
  wrongText.textContent = wrongLetters;
  workText.textContent = displayWord;
  $("#modal-title").html(userMessage)
  $("#modal-body").html("The animal was " + computerWord + "<br>" + "<img src='../images/" + computerWord + ".png>")

}

document.onkeyup = function (event) {
  var userGuess = event.key;

  printWord(wordPrint);
  populateText(userWork, userMessage);
  match(userGuess);
  win(userWork, computerLetters);
  lose(guesses);
  populateText(userWork, userMessage);




}