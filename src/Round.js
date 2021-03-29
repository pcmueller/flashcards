const Turn = require('./Turn');

class Round {
  constructor(cardSet = []) {
    this.deck = cardSet.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
    this.startTime = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }

    this.turns++;
    this.calculatePercentCorrect();
    this.currentCard = this.deck[this.turns];

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    this.percentCorrect = Math.round((((this.turns - 
      this.incorrectGuesses.length) / this.turns) * 100));

    return this.percentCorrect;
  }

  restartTimer() {
    this.startTime = Date.now();
  }

  calculateTime() {
    const milliseconds = Date.now() - this.startTime;
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor(milliseconds / 60000);
    let timeStatement;
    
    if (minutes === 1) {
      timeStatement = `1 minute and ${seconds} seconds`;
    } else {
      timeStatement = `${minutes} minutes and ${seconds} seconds`;
    }

    return timeStatement;
  }

  endRound() {
    const timeStatement = this.calculateTime();
    const roundStatement = `** Round over! ** 
      You answered ${this.percentCorrect}% of the questions correctly in ${timeStatement}!`;
    console.log(roundStatement);
    return roundStatement;
  }
}

module.exports = Round;