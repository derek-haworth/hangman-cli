var Letter = require("./letter.js");

var Word = function(newLetterArr) {
	// array of `new` Letter objects representing the letters of the underlying word
	this.newLetterArr = newLetterArr;
	this.wordRepresent = function() {
		/* A function that returns a string representing the word. 
		   This should call the function on each letter object (the first function defined in `Letter.js`) 
		   that displays the character or an underscore and concatenate those together.
		*/
	};
	this.guessAndCheck = function(character) {
		/* A function that takes a character as an argument and calls the guess function
		   on each letter object (the second function defined in `Letter.js`)
		*/
	};
};

module.exports = Word;
