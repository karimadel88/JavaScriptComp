
let player = {
    pName : "karim",
    pChips : 145
}

let cards = [];
let sum = 0;

let hasBlackJack = false;
let msg = "";

const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const playerEl = document.getElementById('player-el');

playerEl.textContent = `${player.pName} :- $${player.pChips}`;

let getRandomCard = function () {
    let randomNumer = Math.floor( Math.random()*13 ) + 1;
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

let startGame = function () {
    isAlive = true;
    let fCard = getRandomCard();
    let sCard = getRandomCard();
    cards = [fCard,sCard];
    sum = fCard+sCard;
    renderGame();
}  

let renderGame = function (){
    cardsEl.textContent = "Cards: "; 
    for(let i=0;i<cards.length;i++){
        // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
        cardsEl.textContent += cards[i] + " ";

    }
    sumEl.textContent = "Sum: " + sum
    
    if(sum < 21){
        msg = "Do you want to draw a new card? 🙂";
    }else if(sum === 21){
        msg = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    }else{
        msg = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = msg;
   
}

let newCard = function (){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }else{
        console.log("End Game");
    }
}