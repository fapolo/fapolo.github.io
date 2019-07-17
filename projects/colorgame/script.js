const squares = document.querySelectorAll(".square");
const targetDisplay = document.querySelector(".target");
let winSquare = 99;

// ==============================
// FUNCOES
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

// ==============================
// SETUP E INICIO
// ==============================

squares.forEach(function(square){
    square.style.background = rndColor();
});

setTarget();

//ao clicar no square, verificar se é a cor certa
//se não, escurecer/sumir
//se sim, mudar a cor de todos os outros