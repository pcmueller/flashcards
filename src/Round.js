class Round {
  constructor(cards = []) {
    this.deck = cards;
    this.currentProperty = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;f
  }
}

module.exports = Round;