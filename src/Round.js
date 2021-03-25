const Turn = require('./Turn');

class Round {
  constructor(cardSet = []) {
    this.deck = cardSet.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    let status = turn.evaluateGuess();

    if (!status) {
      this.incorrectGuesses.push(this.currentCard.id);
    }

    this.turns++;
    this.calculatePercentCorrect();
    this.currentCard = this.deck[this.currentCard.id++];
    return turn.giveFeedback();

    // if (this.turns === this.deck.length) {
    //   return turn.giveFeedback() + "\n" + this.endRound();
    // } else {
    //   return turn.giveFeedback();
    // }
  }

  calculatePercentCorrect() {
    this.percentCorrect = Math.round((((this.turns - this.incorrectGuesses.length) / this.turns) * 100));
    return this.percentCorrect;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`);
  }
}

module.exports = Round;