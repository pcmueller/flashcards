const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should access element in cards array by index', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards[0]).to.equal(card1);
    expect(deck.cards[1]).to.equal(card2);
    expect(deck.cards[2]).to.equal(card3);
  });

  it('should store length of cards array', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);

    expect(deck.size).to.equal(3);
  });

});