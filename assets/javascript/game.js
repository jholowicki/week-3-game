

//Conceptualization of gameObject.
	//Beginning of Play --needs to (1) pick a random answer (2) make the underscore prompt 
	//(3) reset the game tallies
	//Game Play --letter is pressed and is (1) checked against answer (2)underscore placement
	//changed to the letter or loss of guess chances 
	//Checks --sees if (1) user wins (2) depletes guess chances (3) updates screen
	//Oject needs to be called.

var gameObject = {
	answers: ['OM','BUDDHA','MEDITATE'], 
	selectedAnswer: '',
	underscoredAnswer:[],
	lettersGuessed: [],
	guessesRemaining: 15,
	keyInput: '',
	gameDone: false,
	guessesEmpty: false,
	random: function(){
		this.selectedAnswer = this.answers[Math.floor((Math.random()*(this.answers.length-1)))];
	},
	promptOfUnderscores: function(){
		for (var i = 0; i < this.selectedAnswer.length; i++) {
			this.underscoredAnswer.push('_ ');
			this.displayUnderscoredAnswer(this.selectedAnswer.join(' '));
		}
	},
	displayUnderscoredAnswer: function(underscoredAnswer){
		document.getElementById('game-start').innerHTML = underscoredAnswer;

	},
	beginPlay: function(){
		this.random();
		this.promptOfUnderscores();
		this.gameStatus;
	},
	gameStatus: function() {
        document.getElementById('guesses-remaining').innerHTML =
            '<p>: Guesses Remaining: ' + (this.guessesRemaining) + '</p>';
        document.getElementById('letters-guessed').innerHTML =
            '<p>Letters Guessed: ' + this.lettersGuessed.join(' ') + '</p>';
    },

	letterPressEvent: function(event) {
        if (this.selectedAnswer.indexOf(this.keyInput) !== -1) {
            for (var i = 0; i < this.selectedAnswer.length; i++) {
                if (this.selectedAnswer[i] === this.keyInput) {
                    this.underscoredAnswer[i] = this.keyInput;
                };
            };
            this.displayUnderscoredAnswer(gameObject.underscoredAnswer.join(' '));
        } else if (this.lettersGuessed.indexOf(this.keyInput) === -1) {
            this.lettersGuessed.push(this.keyInput);
            this.guessesRemaining--;
        };
    },
    checkIf: function() {
        if (this.underscoredAnswer.join('').toUpperCase() === this.selectedAnswer) {
            this.gameDone = true;
        } else if ((this.guessesRemaining) === 0) {
            this.guessesEmpty = true;
        };
    },
     keyPressing: function(event) {
        this.keyInput = String.fromCharCode(event.keyCode).toLowerCase();

        if(this.keyInput.match(/^[A-Za-z]+$/)) {
            this.letterPressEvent();
            this.gameStatus();
            this.checkIf();
        };
    },
      restartGame: function() {
      	if (this.gameDone === true){
      		selectedAnswer: '',
			underscoredAnswer:[],
			lettersGuessed: [],
			guessesRemaining: 15,
			keyInput: '',
			gameDone: false,
			guessesEmpty: false,
			this.startGame();
      	};
    },


document.onkeyup = function(evaluate) {
    if (gameObject.selectedAnswer === '') {
        gameObject.beginPlay();
    } else if ((gameObject.gameDone === true){
        gameObject.restart();
    } else {
        gameObject.letterPressEvent(event);
    };

}



		



		













	});
