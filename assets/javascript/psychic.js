var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var guessesThisRound = [];

var guess = null;	// Stores guess from user

var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];


document.onkeyup = function(event) {
	var guess =  String.fromCharCode(event.keyCode).toLowerCase();

	if (guess === secretLetter) {
		wins++;
		alert("You guessed the secret letter, you are psychic! Congrats!");
		guessesLeft = 9;
		guessesThisRound.length = 0;
		document.querySelector("#wins").innerHTML = "Wins:" + wins;
		document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + guessesLeft;
		document.querySelector("#guessesThisRound").innerHTML ="Guesses This Round" + guessesThisRound;
	}
	else if (guessesLeft === 0) {
		losses++;
		alert("You are not psychic! You should try again!");
		guessesLeft = 9;
		guessesThisRound.length = 0;
		document.querySelector("#losses").innerHTML = "Losses:" + losses;
		document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + guessesLeft;
		document.querySelector("#guessesThisRound").innerHTML ="Guesses This Round" + guessesThisRound;
	}
	else if (guess !== secretLetter) {
		guessesLeft--;
		guessesThisRound.push(guess);
		document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + guessesLeft;
		document.querySelector("#guessesThisRound").innerHTML ="Guesses This Round" + guessesThisRound[];
	}
}