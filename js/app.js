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
const header = document.querySelector("h2");

class Card {
  // card objects that are initialized with an image url and value;
  constructor(image, value, winSound, loseSound) {
    this.image = image;
    this.value = value; // value used to compare cards easier.
    this.open = false;
    this.cardImage = document.createElement("img");
    this.cardImage.className = "mem-card";
    this.cardImage.src = backOfCard;
    this.winSound = new Audio(winSound);
    this.loseSound = new Audio(loseSound);
    this.press = new Audio("sounds/press.wav");
    this.cardImage.addEventListener("click", () => open(this)); // arrow function is necessary due to "this" scope
  }
  right() {
    this.winSound.play();
  }
  wrong() {
    this.loseSound.play();
  }
  interact() {
    this.press.play();
  }
}

// the most important function. Flips the card and checks the matching conditions and win/lose con.
function open(card) {
  if (lock === null) {
    // disables clicking during the timout. according to my dad this is a semaphore, used in asynchronous code all the time.
    if (!card.open) {
      // disables clicking on already open card
      card.interact(); // clicking noise.
      moves++;
      header.innerText = "Moves left: " + (maxMoves - moves);
      card.open = true;
      card.cardImage.src = card.image; // "flips" the card
      card.cardImage.classList.add("open");
      if (mem === null) {
        mem = card;
      } // checks if this is the first card picked
      else {
        card.cardImage.classList.remove("open");
        mem.cardImage.classList.remove("open");
        if (card.value === mem.value) {
          // checks if they are matching cards
          card.cardImage.classList.add("right");
          mem.cardImage.classList.add("right");
          matched++;
          card.right();
          mem = null; // resets the memory
          checkEnd();
        } else {
          checkEnd();
          mem.wrong();
          card.cardImage.classList.add("wrong");
          mem.cardImage.classList.add("wrong");
          lock = setTimeout(() => {
            // lock controls for one second while it shows you how wrong you are (IDIOT!)
            card.open = false;
            mem.open = false;
            card.cardImage.src = backOfCard;
            mem.cardImage.src = backOfCard;
            card.cardImage.classList.remove("wrong");
            mem.cardImage.classList.remove("wrong");
            mem = null;
            lock = null;
          }, showTime);
        }
      }
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
// clears the div when the game is reset
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
// checks win/lose condition so i don't have to repeat myself.
function checkEnd() {
  if (matched === sets) {
    alert("You win! Total moves " + moves);
    init();
  } else if (moves >= maxMoves) {
    alert("You lose! Reached " + maxMoves + " moves.");
    init();
  }
}
function init() {
  removeAllChildNodes(cardGrid);
  sets = 6;
  matched = 0;
  grid = [];
  moves = 0;
  maxMoves = 30;
  mem = null;
  lock = null;
  header.innerText = "Moves left: " + maxMoves;
  const cardOne = new Card(
    (src = "images/image-gear.png"),
    "gear",
    "sounds/gear-right.wav",
    "sounds/gear-wrong.wav"
  );
  const cardTwo = new Card(
    (src = "images/image-gear.png"),
    "gear",
    "sounds/gear-right.wav",
    "sounds/gear-wrong.wav"
  );
  const cardThree = new Card(
    (src = "images/image-arc.png"),
    "arc",
    "sounds/neco-right.wav",
    "sounds/neco-wrong.wav"
  );
  const cardFour = new Card(
    (src = "images/image-arc.png"),
    "arc",
    "sounds/neco-right.wav",
    "sounds/neco-wrong.wav"
  );
  const cardFive = new Card(
    (src = "images/image-power.png"),
    "power",
    "sounds/ranger-right.wav",
    "sounds/ranger-wrong.wav"
  );
  const cardSix = new Card(
    (src = "images/image-power.png"),
    "power",
    "sounds/ranger-right.wav",
    "sounds/ranger-wrong.wav"
  );
  const cardSeven = new Card(
    (src = "images/image-ranger.png"),
    "ranger",
    "sounds/ranger-right.wav",
    "sounds/ranger-wrong.wav"
  );
  const cardEight = new Card(
    (src = "images/image-ranger.png"),
    "ranger",
    "sounds/ranger-right.wav",
    "sounds/ranger-wrong.wav"
  );
  const cardNine = new Card(
    (src = "images/image-thecraft.png"),
    "craft",
    "sounds/craft-right.ogg",
    "sounds/craft-wrong.ogg"
  );
  const cardTen = new Card(
    (src = "images/image-thecraft.png"),
    "craft",
    "sounds/craft-right.ogg",
    "sounds/craft-wrong.ogg"
  );
  const CardEleven = new Card(
    (src = "images/image-vaultboy.png"),
    "vault",
    "sounds/ranger-right.wav",
    "sounds/ranger-wrong.wav"
  );
  const CardTwelve = new Card(
    (src = "images/image-vaultboy.png"),
    "vault",
    "sounds/ranger-right.wav",
    "sounds/ranger-wrong.wav"
  );
  grid.push(
    cardOne,
    cardTwo,
    cardThree,
    cardFour,
    cardFive,
    cardSix,
    cardSeven,
    cardEight,
    cardNine,
    cardTen,
    CardEleven,
    CardTwelve
  );

  shuffle(grid);
  grid.forEach((item) => {
    cardGrid.appendChild(item.cardImage);
  });
}

init();
