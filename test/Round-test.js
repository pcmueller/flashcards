const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  it.skip('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  it.skip('should be an instance of Deck', function() {
    const deck = new Deck();
    const round = new Round(deck);
    expect(round).to.be.an.instanceOf(Round);
  });

});