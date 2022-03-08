const cardArray = [
    {
        name: 'fries',
        img: 'Images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png'
    },
    {
        name: 'fries',
        img: 'Images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png'
    },
]

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
let failedAttempts = 0;
let goodAttempts = 0;

console.log(gridDisplay);

function createBoard() {
    // Create a div for each card in array
    for(let i=0;i<cardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'Images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard)
        console.log(card);
        gridDisplay.append(card);
    }
}

createBoard();

function updateScore() {
    const score = document.querySelector('#result');
    const attempts = goodAttempts + failedAttempts;
    score.innerHTML = goodAttempts + " of " + attempts;
    if(goodAttempts == 6){
        // Must have won!
        gridDisplay.innerHTML = "<h1>YOU WIN!</h1>"
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    
    console.log("Check for match!");
    console.log(cards);

    if(cardsChosenIds[0]!=cardsChosenIds[1] && cardsChosen[0]==cardsChosen[1]){
        console.log("Match!");
        cards[cardsChosenIds[0]].setAttribute('src','images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src','images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click',flipcard);
        cards[cardsChosenIds[1]].removeEventListener('click',flipcard);
        cardsWon.push(cardsChosen);
        goodAttempts++;
    }
    else {
        console.log("NO MATCH!");
        cards[cardsChosenIds[0]].setAttribute('src','images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src','images/blank.png');
        failedAttempts++;
    }
    cardsChosen = [];
    cardsChosenIds = [];
    updateScore();
}

function flipcard() {
    let cardId = this.getAttribute('data-id');
    let cardName = cardArray[cardId].name;
    cardsChosen.push(cardName);
    cardsChosenIds.push(cardId);
    console.log('clicked ' + cardId + " " + cardName);
    console.log(cardsChosen);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500);
    }
}