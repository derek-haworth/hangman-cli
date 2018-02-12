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

	},

	
}

hangGame.init();
