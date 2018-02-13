// Requiring our word module exported from word.js which also includes letter.js
var Word = require("./word.js");
// Requiring `inquirer` module for questions
var inquirer = require("inquirer");
// just for fun
var colors = require('colors'); 

var hangGame = {
	wordArr: ["test", "hello", "derek", "world"],
	lives: 0,
	currentWord: "",
	alphabetArr: [],
	wrongGuess: [],

	init: function() {
		var randomWord = Math.floor(Math.random() * this.wordArr.length);
		var chosenWord = this.wordArr[randomWord].toUpperCase();
		this.lives = 10;
		this.currentWord = new Word(chosenWord);

		// Build Intro Here with console.logs for Jurassic Park Themed Game
		console.log("\nWelcome to...");
		setTimeout(function() {
        	    console.log("\nJurassic Park!");
        	    console.log("\nHangman!");
			console.log("                  ,");
			console.log("               ,  ;:._.-`''.");
			console.log("             ;.;'.;`      _ `.");
			console.log("              ',;`       ( \ ,`-.  ");
			console.log("           `:.`,         (_/ ;\  `-.");
			console.log("            ';:              / `.   `-._");
			console.log("          `;.;'              `-,/ .   `-.");
			console.log("          ';;'              _    `^`     `.");
			console.log("         ';;            ,'-' `--._        ;");
			console.log("':      `;;        ,;     `.    ':`,,.__,,_\`");
			console.log(" `;`:;`;:`       ,;  '.    ;,      ';';':';");
			console.log("              .,; '    '-._ `':.;    ");
			console.log("            .:; `          '._ `';;,");
			console.log("          ;:` `    :'`'       ',__.)");
			console.log("        `;:;:.,...;'`'");
			console.log("      ';. '`'::'`''  .'`'");
			console.log("    ,'   `';;:,..::;`'`'");
			console.log(", .;`      `'::''`");
			console.log(",`;`.");
			console.log("\n\nHit any key when you are ready.\n\n");

			// get method from letter.js
			hangGame.currentWord.renderWord();
			//the magic method that prompts player to Type in a letter
			hangGame.guessAndCheck();
		}, 2000);
	},

	// Creates alphabet array and pushes into empty array defined in hangGame object
	alphabet: function () {
		for (var i = 65; i <= 90; i++) {
			this.alphabetArr[this.alphabetArr.length] = String.fromCharCode(i);
		}
	},

	newGame: function() {
		inquirer.prompt([
			{
		    	type: "confirm",
		    	message: "Do you want to play again?",
		    	name: "confirm",
		    	default: true
		    }
		])
		.then(function(answer) {

		   	if (answer.confirm) {
		   		hangGame.init();
		   	} else {
		   		hangGame.endGame();
		   	}
		});
	},

	endGame: function() {
		console.log("\nThanks for playing!\n");
		return;
	},

	guessAndCheck: function() {
		inquirer.prompt([
			{
		    	type: "input",
		    	message: "Type in a letter and hit 'Enter':",
		    	name: "guess",
		    	validate: function(input) {

		    		var done = this.async();
		    		var key = input.toUpperCase();

				  	if (!hangGame.alphabetArr.includes(key) ) {
				  		done("Please enter a letter.");
				  		return;
				  	}
				  	done(null, true);
				  }
			}
	    ])
	    .then(function(answer) {
	    	var guess = answer.guess.toUpperCase();
	    	console.log("You guessed: ", guess);

	    	var found = hangGame.currentWord.checkLetter(guess);
	    	hangGame.currentWord.renderWord();

	    	if (!found) {

	    		hangGame.lives--;

	    		if (hangGame.lives === 0) {
	    			console.log("\nSorry, the answer was '" + hangGame.currentWord.value + "'\n");
	    			hangGame.newGame();
	    		} else {
	    			console.log("Try again!");
	    			console.log("Status report: lives = " + hangGame.lives);
	    			hangGame.guessAndCheck();
	    		}	    		
	    	} else {

	    		hangGame.currentWord.isWordFound();

	    		if (hangGame.currentWord.found) {
	    			console.log("Clever girl!");
	    			console.log("You won!\n");
	    			hangGame.newGame();
	    		} else {
	    			hangGame.guessAndCheck();
	    		}
	    	}	    	
	    });
	}
}

// create the letters for the alphabet
hangGame.alphabet();
// Initialize the Game
hangGame.init();
