/* let number = Math.random();
console.log("Number is: "+ number); */

/*   function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

 */


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); //alternate way to grab html element in JS #=id and "."=class
let cardsEl = document.getElementById("cards-el");
let playerEl = document.querySelector("#player-el");

// let newCardButton = document.querySelector("#new-card-button");

let player = {
    name: "Adama",
    chips: 15
}

playerEl.innerText = player.name + ": $" + player.chips;

function startGame(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: ";
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: "+ sum;
    if (sum<=20) {
        message = "Do you want to draw a new card?";
    } else if (sum===21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){

    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum+= card;
        cards.push(card);
        renderGame();
    }
}

function getRandomCard(){
    let randomValue =  Math.floor(Math.random()*13) + 1; 
    if(randomValue === 1){
        return 11;
    } else if (randomValue > 10) {
        return 10;
    }
    return randomValue;
}





