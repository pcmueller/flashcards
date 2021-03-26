# Flash Cards!
---
[GitHub Repo](https://github.com/pcmueller/flashcards-starter)
[Project Planning Board](https://trello.com/b/SOkAxuLZ/flash-cards-project)

## Abstract
*A fun project to simulate the use of flash cards run entirely through the user's Command Line Interface (CLI).  This app cycles through a "deck" of cards, and with each card and prompt's the user to select one of three possible answers to specific question, each answer prompting a response of either "correct" or "incorrect." Once a deck has been completed the user is notified and provided with their percentage of correct answers.*

## Demonstration
![App demontration GIF](https://media.giphy.com/media/2E1c9WeTLFIgPPZ4FV/giphy.gif)

## Installation Instructions

### Fork This Repo

On the top right corner of this page, click the **Fork** button.

### Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
```

Your game should then initialize, display a welcome message and begin quizzing you with the first Flash Card in your deck!

```bash
Welcome to FlashCards! 
    You are playing with 30 cards.
    -----------------------------------------------------------------------
? What allows you to define a set of related information using key-value pairs?
```

## Contributor

![picture](./assets/peteandsteve.jpg)

- [🦥 Peter Muellerleile](https://github.com/pcmueller)
