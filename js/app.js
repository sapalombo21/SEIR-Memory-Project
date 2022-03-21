// GAME PROPERTIES
let sets; // number of pairs. used for win con
let grid; // game grid
let moves; // move count for lose con
let matched; // matched for win con
let maxMoves; // lose con
let mem; // stores last card
let lock; // locks controls during timeout
const showTime = 1000; // time in MS to keep the cards open
const cardGrid = document.querySelector("#mem-game");
const backOfCard = (src = "images/image-back.png");

class Card {
  // card objects that are initialized with an image url and value;
  constructor(image, value) {
    this.image = image;
    this.value = value; // value used to compare cards easier.
    this.open = false;
    this.cardImage = document.createElement("img");
    this.cardImage.className = "mem-card";
    this.cardImage.src = backOfCard;
    this.cardImage.addEventListener("click", () => open(this));
  }
}

function open(card) {
  card.open = true;
  moves++;
  card.cardImage.src = card.image; // "flips" the card
  if (mem === null) {
    mem = card;
  } // checks if this is the first card picked
  else {
    if (card.value === mem.value) {
      // checks if they are matching cards
      matched++;
      mem = null; // resets the memory
      if (matched === sets) {
        alert("You win! Total moves " + moves);
      }
    } else if (moves >= maxMoves) {
      alert("You lose! Exceeded " + maxMoves + " moves.");
    } else {
      lock = setTimeout(() => {
        card.open = false;
        mem.open = false;
        card.cardImage.src = backOfCard;
        mem.cardImage.src = backOfCard;
        mem = null;
        lock = null;
      }, showTime);
    }
  }
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function init() {
  sets = 2;
  matched = 0;
  grid = [];
  moves = 0;
  maxMoves = 10;
  mem = null;
  lock = null;
  const cardOne = new Card((src = "images/image-gear.png"), "gear");
  const cardTwo = new Card((src = "images/image-gear.png"), "gear");
  const cardThree = new Card((src = "images/image-arc.png"), "arc");
  const cardFour = new Card((src = "images/image-arc.png"), "arc");
  grid.push(cardOne, cardTwo, cardThree, cardFour);
  shuffle(grid);
  grid.forEach((item) => {
    cardGrid.appendChild(item.cardImage);
  });
}

init();
