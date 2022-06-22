document.querySelector("button").onclick = function () {
    rollDice();
    // reset();
}

function rollDice() {
    var randomNumberPlayer1 = Math.floor(Math.random() * 6) + 1;
    var randomeImagePlayer1 = "images/dice" + randomNumberPlayer1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomeImagePlayer1);

    var randomNumberPlayer2 = Math.floor(Math.random() * 6) + 1;
    var randomeImagePlayer2 = "images/dice" + randomNumberPlayer2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomeImagePlayer2);

    var text = document.querySelector(".winner h1");

    if (randomNumberPlayer1 > randomNumberPlayer2) {
        text.innerHTML = "Player 1 wins YIPEE!!!";
    } else if (randomNumberPlayer2 > randomNumberPlayer1) {
        text.innerHTML = "Player 2 wins YIPEE!!!";
    } else {
        text.innerHTML = "DRAW";
    }
}

function reset(){
    var text = document.querySelector(".winner h1");
    text.innerHTML = "Roll the dice!";
}