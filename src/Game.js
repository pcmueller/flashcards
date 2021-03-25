const Card = require('./Card');
const data = require('./data');
const Round = require('./Round');
const Deck = require('./Deck');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.cards;
    this.currentDeck = [];
    this.currentRound = {};
  }

  start(cardSet) {
    // add code to "create Cards" and "put Cards in Deck"
    // this.cards = cardSet.cards || prototypeQuestions;
    this.cards = prototypeQuestions;
    this.currentDeck = new Deck(this.cards);
    this.currentRound = new Round(this.currentDeck);
    this.printMessage(this.currentDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${this.currentDeck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;