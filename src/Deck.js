class Deck {
  constructor(cardSet = []) {
    this.cards = cardSet;
    this.size = this.cards.length;
  }
}

module.exports = Deck;