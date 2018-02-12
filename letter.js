//constructor function that displays "_", "-" depending on word or user guessed character based on what the user inputs.

var Letter = function(value) {
	this.value = value;
	this.show = false;

	this.printLetter = function() {
		if (this.value === " ") {
			this.show = true;
			return "  ";
		} else if (this.show) {
			return this.value + " ";
		} else {
			return "_ ";
		}
	}
}

module.exports = Letter;
	
