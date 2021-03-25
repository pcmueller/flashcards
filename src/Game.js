const util = require('./util');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.cards;
    this.currentDeck = [];
    this.currentRound = {};
  }

  start() {
    this.cards = prototypeQuestions.map(card => new Card (card.id, card.question, card.answers, card.correctAnswer));
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