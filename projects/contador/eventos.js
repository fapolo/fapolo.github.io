const player1 = document.querySelector("#p1");
const player2 = document.querySelector("#p2");
const player1Display = document.querySelector(".p1-score");
const player2Display = document.querySelector(".p2-score");
const reset = document.querySelector("#reset");
const counter = document.querySelector(".counter");
const input = document.querySelector("input");
const winner = document.querySelector(".show-winner");
let gameOver = false;

let scores = {
    max: 5,
    player1: 0,
    player2: 0
}

player1.addEventListener("click", function(){
    if (!gameOver) {
        scores.player1++;
        player1Display.textContent = scores.player1;
    }
    if (scores.player1 === scores.max) {
        player1Display.classList.add("win");
        winner.textContent = "Jogador 1 Ganhou!";
        gameOver = true;
    }
})

player2.addEventListener("click", function(){
    if (!gameOver) {
        scores.player2++;
        player2Display.textContent = scores.player2;
    }
    if (scores.player2 === scores.max) {
        player2Display.classList.add("win");
        winner.textContent = "Jogador 2 Ganhou!";
        gameOver = true;
    }
})

reset.addEventListener("click", function(){
    scores.player1 = 0;
    scores.player2 = 0;
    scores.max = Number(input.value);
    counter.textContent = scores.max;
    player1Display.textContent = scores.player1;
    player1Display.classList.remove("win");
    player2Display.textContent = scores.player2;
    player2Display.classList.remove("win");
    winner.textContent = "";
    gameOver = false;
})

input.addEventListener("click", function() {
    if (!gameOver) {
        counter.textContent = input.value;
        scores.max = Number(input.value);
    }
})