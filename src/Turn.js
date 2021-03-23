class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.status = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.status = true;
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.status) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;