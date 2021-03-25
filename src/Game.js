const Card = require('./Card');
const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentDeck;
    this.currentRound;
  }

  start() {
    // add code to "create Cards" and "put Cards in Deck"
    this.currentDeck = new Deck(prototypeQuestions);
    this.currentRound = new Round(this.currentDeck);
    this.printMessage(this.currentDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;