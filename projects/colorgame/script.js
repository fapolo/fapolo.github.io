const squares = document.querySelectorAll(".square");
const targetDisplay = document.querySelector(".target");
const restart = document.querySelector(".restart");
let winSquare = 99;
let gameOver = false;

// ==============================
// FUNÇÕES
// ==============================

function rndColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let color = "rgb(" + r +", " + g +", "+ b +")";
    return color;
}

function setTarget() {
    let i = Math.round(Math.random() * 5);
    let colorDisplay = rndColor();
    winSquare = i;
    targetDisplay.textContent = colorDisplay;
    squares[i].style.background = colorDisplay;
}

function colorAll(rightSquare) {
    squares.forEach(function(square){
        square.style.background = rightSquare.style.background;
    })
}

function blackoutSquare(square) {
    square.style.background = "rgb(255, 255, 255)";
}

function setupSquares() {
    squares.forEach(function(square){
        square.style.background = rndColor();
    });
}

// ==============================
// SETUP E INICIO
// ==============================


setupSquares();
setTarget();

squares.forEach(function(square,i){
    square.addEventListener("click", function(){
        if (i !== winSquare && !gameOver) {
            blackoutSquare(square);
        }
        else if (i === winSquare && !gameOver) {
            colorAll(square);
            gameOver = true;
        }
        else {
            return 0;
        }
    })
});

restart.addEventListener("click", function(){
    setupSquares();
    setTarget();
    gameOver = false;
});