
let firstCard= 0;
let secondCard= 0;
let cardArr = [];
let sum = 0;

let cardText = document.getElementById("card");


let sumText = document.getElementById("sum");

let isAlive = false;
let hasBlackjack = false;

let message ="";
let mesg = document.getElementById("msg");

let player = {
    name: "lucifer",
    chips: 250
}

let playerText = document.getElementById("player");
playerText.textContent = player.name +": "+player.chips;




function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber > 10)
    return 10;
    else if(randomNumber === 1)
    return 11;
    else 
    return randomNumber;
}

function renderGame(){
    if(sum < 21){
        message ="Do you want to draw another card";
    }
    else if(sum === 21) {
        message ="Whoo! you got a blackjack";
        hasBlackjack = true;
    }
    else if(sum > 21){
        message ="Game over";   
        isAlive = false;
        location.reload();
    }

    sumText.textContent = "Sum: "+sum ;
    cardText.textContent = "Cards: "
    for(let i=0; i<cardArr.length; i++)
    {
       cardText.textContent += cardArr[i] +" ";
    }
    mesg.textContent = message;
}

function newCard(){
    if(hasBlackjack == false && isAlive == true) {
    let thirdCard = getRandomCard();
    sum = sum + thirdCard;
    cardArr.push(thirdCard);
    renderGame();
    }

}


function startGame()
{
    isAlive = true;
    firstCard=getRandomCard();
    secondCard=getRandomCard();
    cardArr.push(firstCard, secondCard)
    sum = firstCard + secondCard;

    renderGame()
}
