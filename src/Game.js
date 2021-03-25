const util = require('./util');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.cards;
    this.deck = [];
    this.round = {};
    this.status = false;
  }

  start() {
    this.cards = prototypeQuestions.map(card => new Card (card.id, card.question, card.answers, card.correctAnswer));
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
    this.status = true;
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${this.deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;