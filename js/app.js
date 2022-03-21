// GAME PROPERTIES
const sets = 1; // number of pairs. used for win con
const grid = []; // game grid
let moves = 0; // move count for lose con
let matched = 0; // matched for win con
let maxMoves = 50; // lose con
let mem = null; // stores last card
const showTime = 1000; // time in MS to keep the cards open
const cardGrid = document.querySelector('#mem-game');
const backOfCard = src='images/image-back.png';

class Card{ // card objects that are initialized with an image url and value; 
    constructor(image,value) {
        this.image = image;
        this.value = value; // value used to compare cards easier.
        this.open = false;
        this.cardImage = document.createElement('img');
        this.cardImage.className = 'mem-card';
        this.cardImage.src = backOfCard;
        this.cardImage.addEventListener('click', () => open(this))
    }
}


function open(card){
    card.open = true;
    moves++;
    card.cardImage.src = card.image; // "flips" the card
    if (mem === null) {mem = card;} // checks if this is the first card picked
    else {
        if (card.value === mem.value) { // checks if they are matching cards
            matched++;
            mem = null; // resets the memory
            if (matched === sets) {
                alert("You win! Total moves " + moves);
            }
        }
    }


}

const cardOne = new Card(src='images/image-gear.png','gear');
const cardTwo = new Card(src='images/image-gear.png','gear');
grid.push(cardOne, cardTwo);

grid.forEach((item) => {
    cardGrid.appendChild(item.cardImage);
});