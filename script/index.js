let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() { // function this when it is being called
    let randomNumer = Math.floor( Math.random()*13 ) + 1 // storing a method inside a var to call it whenever u need to use it
    if (randomNumer > 10) { // if random numer is greater than 10 , return value of 10 
        return 10
    } else if (randomNumer === 1) { // else if randomnumer equal 1 , return value of 11
        return 11
    } else { // else just return any random numer that is not stated above
        return randomNumer
    }
}

function startGame() {
    isAlive = true // when u click start game, it becomes alive . 
    let firstCard = getRandomCard() // draw a randmo card from the function
    let secondCard = getRandomCard() // draw a randmo card from the function
    cards = [firstCard, secondCard]  // store first and second card in the var 
    sum = firstCard + secondCard // sum of the first card n secod
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " // the Cards: will always show when u click on start game or a new card .
    for (let i = 0; i < cards.length; i++) { // 
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}



function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

// Count to ten!

// We need to specify...

// Where should we START counting? let count = 1 , it will start from 1 
// Where is the FINISH line? if count is lesser than 11 , it will always count to 10 only. 
// What's the STEP SIZE we should use? eg, counting by 1 2 3 , or if count += 2 meanig it will count 1 , 3 ,5 , 7 .

//    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 1 )  {
    
//     console.log(count)

// }
