const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should store a deck of cards', function() {
    expect(round.deck).to.equal(deck.cards);
  });

  it('should store first card in deck as default value of current card', function() {
    expect(round.currentCard).to.equal(card1);
  });

  it('should store user turns with a default value of zero', function() {
    expect(round.turns).to.equal(0);
  });

  it('should store incorrect guesses with an empty array as default value', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should store percentage of correct guesses with default value or zero', function() {
    expect(round.percentCorrect).to.equal(0);
  });

  it('should be able to return value of current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update currect card to next in deck after taking a turn', function() {
    round.takeTurn('array');

    expect(round.currentCard.id).to.equal(2);
  });

  it('should be able to store incorrect guesses', function() {
    round.takeTurn('array');
    expect(round.incorrectGuesses).to.deep.equal([1]);

    round.takeTurn('array');
    expect(round.incorrectGuesses).to.deep.equal([1]);

    round.takeTurn('iteration method');
    expect(round.incorrectGuesses).to.deep.equal([1, 3]);
  });

  it('should return "correct!" if guess is correct', function() {
    expect(round.takeTurn('object')).to.equal('correct!');
  });

  it('should return "incorrect!" if guess is incorrect', function() {
    expect(round.takeTurn('array')).to.equal('incorrect!');
  });

  it('should be able to return percent of correct guesses ', function() {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');

    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it('should be able to start timer', function() {
    let status = false;

    round.restartTimer();

    if (round.startTime > 0) {
      status = true;
    }
    
    expect(status).to.equal(true);
  });

  it('should be able to end round', function() {
    let gameOver = false;

    round.restartTimer();

    if (typeof(round.endRound() === 'string')) {
      gameOver = true;
    }

    expect(gameOver).to.equal(true);
  });
});