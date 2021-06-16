function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let randomNumber1 = getRandomInt(1, 7)
let randomNumber2 = getRandomInt(1, 7)
let randoms = [randomNumber1, randomNumber2]


let dice = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
]

let dieField = document.querySelectorAll("img");


dieField[0].setAttribute("src", dice[randoms[0] - 1])
dieField[1].setAttribute("src", dice[randoms[1] - 1])

let header = document.querySelector("h1")
if (randomNumber1 > randomNumber2) {
    header.innerHTML = "Player 1 wins"
} else if (randomNumber2 > randomNumber1) {
    header.innerHTML = "Player 2 wins"
} else {
    header.innerHTML = "It's a draw"
}