const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {
    // const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it.skip('should store a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.guess).to.equal('object');
  });  

  it.skip('should store a card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.card).to.equal(card);
  });  

  it.skip('should return a provided guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnGuess()).to.equal('object');
  });  

  it.skip('should return a provided card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnCard()).to.equal(card);
  });  

  it.skip('should return true when guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it.skip('should return false when guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should return "correct!" when guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it.skip('should return "incorrect!" when guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});