//constructor function that displays "_" or user guessed character based on what the user inputs.

var Letter = function(char) {
	this.char = char;
	this.guessed = false;
	this.display = '_';
	this.checkLetter = function(guess){
	  if (guess.toLowerCase() === this.char.toLowerCase()){
	    this.display = this.char;
	    this.guessed = true;
	  }
	  return this.guessed;
	}
};

module.exports = Letter;
