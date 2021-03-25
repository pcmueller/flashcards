class Deck {
  constructor(cardSet = []) {
    this.cards = cardSet;
    this.size = this.cards.length;
  }

  countCards() {
    return this.size;
  }
}

module.exports = Deck;