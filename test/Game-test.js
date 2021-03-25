const chai = require('chai');
const expect = chai.expect;

// const Card = require('../src/Card');
// const Deck = require('../src/Deck');
// const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

});