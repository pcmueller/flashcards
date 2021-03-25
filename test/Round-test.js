const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  it.skip('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const deck = new Deck();
    const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round);
  });

  it.skip('should store a deck of cards', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.equal(deck.cards);
  });

  it.skip('should store first card in deck as default value of current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.currentCard).to.equal(card1);
  });

  it.skip('should store user turns with a default value of zero', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it.skip('should store incorrect guesses with an empty array as default value', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip('should store percentage of correct guesses with default value or zero', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.percentCorrect).to.equal(0);
  });

  it.skip('should be able to return value of current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it.skip('should update currect card to next in deck after taking a turn', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('array');

    expect(round.currentCard.id).to.equal(2);
  });

  it.skip('should be able to store incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('array');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it.skip('should return "correct!" if guess is correct', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.takeTurn('object')).to.equal('correct!');
  });

  it.skip('should return "incorrect!" if guess is incorrect', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.takeTurn('array')).to.equal('incorrect!');
  });

  it.skip('should be able to return percent of correct guesses ', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const card4 = new Card(4,'What type of prototype method does not modify the existing array but returns a particular representation of the array?',['mutator method', 'accessor method', 'iteration method'], 'accessor method');

    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');
    round.takeTurn('iteration method');

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it.skip('should notify user when game is over with percentage of correct guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const card4 = new Card(4,'What type of prototype method does not modify the existing array but returns a particular representation of the array?',['mutator method', 'accessor method', 'iteration method'], 'accessor method');

    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');
    round.takeTurn('iteration method');

    round.calculatePercentCorrect();

    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });

  it.skip('should automatically end game after final guess is made', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const card4 = new Card(4,'What type of prototype method does not modify the existing array but returns a particular representation of the array?',['mutator method', 'accessor method', 'iteration method'], 'accessor method');

    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');

    expect(round.takeTurn('iteration method')).to.equal(`incorrect!\n** Round over! ** You answered 50% of the questions correctly!`);
  });
});