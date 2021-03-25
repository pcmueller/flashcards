const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
// const Turn = require('../src/Turn');
// const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const game = new Game();

    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have a current deck property with an array as value type', function() {
    const game = new Game();

    expect(game.currentDeck).to.be.an('array');
  });

  it('should have a current round property with an object as value type', function() {
    const game = new Game();

    expect(game.currentRound).to.be.an('object');
  });

  it('should be able to pass in new array and assign as value of current deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const game = new Game();

    game.start(deck);

    expect(game.currentDeck.cards[0].correctAnswer).to.equal('object');
  });

});