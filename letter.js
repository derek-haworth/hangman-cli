var Letter = function(char, guess) {
	this.char = char;
	this.guess = guess;
	this.returnCharacter = function() {
		/* method that returns the underlying character
		   	if the letter has been guessed, or a placeholder (like an underscore)
			if the letter has not been guessed
		*/
	};
	this.checkAndUpdateChar = function(character) {
		/* Method that takes a character as an argument and
			checks it against the underlying character, updating the stored
			boolean value to true if it was guessed correctly
		*/
	};
};

module.exports = Letter;
