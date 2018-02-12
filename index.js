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

	// Creates alphabet array and pushes into empty array defined in hangGame object
	alphabet: function () {
		for (var i = 65; i <= 90; i++) {
			hangGame.alphabetArr[hangGame.alphabetArr.length] = String.fromCharCode(i);
		}
	},

	init: function() {
		hangGame.alphabet();
		var randomWord = Math.floor(Math.random() * this.wordArr.length);
		var chosenWord = this.wordArr[randomWord].toUpperCase();
		hangGame.lives = 10;
		hangGame.currentWord = new Word(chosenWord);

		// Build Intro

		// get method from letter.js
		hangGame.currentWord.renderWord();
		hangGame.askQuestion();
	},

	newGame: function() {
		inquirer
			.prompt([
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

	askQuestion: function() {
		inquirer
			.prompt([
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
	    	console.log(answer);
	    });
	}
}

hangGame.init();
