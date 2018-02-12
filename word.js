var Letter = require("./letter.js");

var Word = function(value) {
	this.value = value;
	this.letters = [];
	this.found = false;
	// automatically construct the letters array by parsing currentWord in Letter constructor
	for (var i = 0; i < this.value.length; i++) {
		var newLetter = new Letter(this.value[i]);
		this.letters.push(newLetter);
	}

}

Word.prototype.checkLetter = function(guess) {
	var letterFound = false;
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].value === guess) {
			this.letters[i].show = true;
			letterFound = true;
		}
	}
	return letterFound;
}

Word.prototype.isWordFound = function() {
	var counter = 0;
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].show === true) {
			counter++;
		}
	}
	if (counter === this.letters.length) {
		this.found = true;
	} else {
		this.found = false;
	}
}

Word.prototype.renderWord = function() {
	var guessedWord	= "";
	for (var i = 0; i < this.letters.length; i++) {
		guessedWord	+= this.letters[i].printLetter();
	}
	console.log("\n" + guessedWord + "\n");
}

module.exports = Word;