const chai = require('chai');
const expect = chai.expect;

// const Card = require('../src/Card');
// const Deck = require('../src/Deck');
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

});