const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {
  let card1, card2, card3, deck, game;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', function() {

    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have a current deck property with an array as value type', function() {
    expect(game.deck).to.be.an('array');
  });

  it('should have a current round property with an object as value type', function() {
    expect(game.round).to.be.an('object');
  });

  it.skip('should be able to pass in new array and assign as value of current deck', function() {
    game.start(deck);

    expect(game.deck.cards[0].correctAnswer).to.equal('object');
  });

  it.skip('should be able to instantiate new round and assign as value of current round', function() {
    game.start(deck);

    expect(game.round.deck.length).to.equal(30);
  });
});