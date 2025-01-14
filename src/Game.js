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
  }

  start() {
    this.cards = prototypeQuestions.map(({ id, question, answers, correctAnswer}) => {
      return new Card(id, question, answers, correctAnswer);
    });
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
    this.round.restartTimer();
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage() {
    console.log(`Welcome to FlashCards! 
    You are playing with ${this.deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;