//constructor function that displays "_", "-" depending on word or user guessed character based on what the user inputs.

var Letter = function(char) {
	this.char = char;
	this.guessed = false;
	this.checkLetter = function(guess){
		if (this.char === " ") {
			this.guessed = true;
			return "  ";
		} else if (this.char === "-") {
			this.guessed = true;
			return "- ";
		} else if (this.guessed) {
			return this.char + " ";
		} else {
			return "_ ";
		}
	}
	  
};

module.exports = Letter;
