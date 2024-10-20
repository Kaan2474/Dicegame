
// Meine Kreise
const MY_CIRCLES = [];

// Kreise des Gegners
const RIVAL_CIRCLES = [];



// Erstellt alle Kreise, welche als Würfelzahlen dienen und fügt die Kreise dem SVG hinzu
function createCircles() {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.querySelector("svg");
    const numberOfCircles = 7;
    for (let i = 0; i<numberOfCircles; i++) {
        MY_CIRCLES[i] = document.createElementNS(svgNamespace, "circle");
        svg.appendChild(MY_CIRCLES[i]);
        RIVAL_CIRCLES[i] = document.createElementNS(svgNamespace, "circle");
        svg.appendChild(RIVAL_CIRCLES[i]);
    }

    // Nachdem die Kreise erstellt wurden, werden die Attribute der Kreise gesetzt
    setCircleAttributes();
}



// Fügt dem ,,Roll Dice'' Button Funktionalität hinzu
function addRollDiceButtonFunctionality() {
    const rollDiceButton = document.getElementById("roll-button");
    rollDiceButton.addEventListener('click', buttonHandler);
}



// Fügt dem ,,Restart'' Button Funktionalität hinzu
function addRestartButtonFunctionality() {
    const restartButton = document.getElementById("restart-button");
    restartButton.addEventListener("click", restartGame);
}



function startGame() {
    createCircles();
    addRollDiceButtonFunctionality();
    addRestartButtonFunctionality();
}



// Vorlage um die Attribute der Kreise zu setzen:
function setAttributes(circle, cx, cy, color) {
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", "20");
    circle.setAttribute("fill", color);
}



// Setzt die Attribute der Kreise: Koordinaten und Farbe
function setCircleAttributes() {
    // Meine Kreise
    setAttributes(MY_CIRCLES[0], "500", "150", "white")
    setAttributes(MY_CIRCLES[1], "450", "100", "white")
    setAttributes(MY_CIRCLES[2], "550", "200", "white")
    setAttributes(MY_CIRCLES[3], "550", "100", "white")
    setAttributes(MY_CIRCLES[4], "450", "200", "white")
    setAttributes(MY_CIRCLES[5], "450", "150", "white")
    setAttributes(MY_CIRCLES[6], "550", "150", "white")

    // Gegner Kreise
    setAttributes(RIVAL_CIRCLES[0], "1300", "150", "white")
    setAttributes(RIVAL_CIRCLES[1], "1250", "100", "white")
    setAttributes(RIVAL_CIRCLES[2], "1350", "200", "white")
    setAttributes(RIVAL_CIRCLES[3], "1350", "100", "white")
    setAttributes(RIVAL_CIRCLES[4], "1250", "200", "white")
    setAttributes(RIVAL_CIRCLES[5], "1250", "150", "white")
    setAttributes(RIVAL_CIRCLES[6], "1350", "150", "white")
}



// Prüft ob der Score kleiner oder gleich 77 ist
function isUnderSeventySeven(score) {
    if (score <= 77) {
        return true;
    }
    return false;
}



// Färbt die Kreise im Würfel in dem gegebenen Intervall schwarz: from - to
function setCirclesToBlack(turn, from, to) {
    for (let i = from; i<to; i++) {
        turn === 1 ? MY_CIRCLES[i].setAttribute("fill", "black") : RIVAL_CIRCLES[i].setAttribute("fill", "black");
    }
}



function getScorePoints() {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const scores = {};

    // Mein Punktestand
    const myScore = document.getElementById("my-score");
    let score = myScore.innerText;
    let number = "";
    // Extrahiert die Zahlen aus dem Punktestand: z.B Score: 23 --> 23
    for (let i = 0; i<score.length; i++) {
        // Speichert die Zahl aus dem Punkestand
        if (numbers.includes(score[i])) {
            number += score[i];
        } 
    }
    // Wandelt den Punktestand in einen Integer um und speichert den Punkestand ab
    number = parseInt(number);
    scores.myScore = number;

    // Das gleiche nochmal mit dem Punktestand vom Gegner
    const rivalScore = document.getElementById("rival-score");
    score = rivalScore.innerText;
    number = "";
    for (let i = 0; i<score.length; i++) {
        if (numbers.includes(score[i])) {
            number += score[i];
        } 
    }
    number = parseInt(number);
    scores.rivalScore = number;
    return scores;
}



// Update meines Scores
function updateScore(turn, diceNumber) {
    const scores = getScorePoints();
    // Ändert meinen Punkestand 
    if (turn === 1) {
        const myScore = document.getElementById("my-score");
        scores.myScore = scores.myScore + diceNumber;
        // Score wird nur gesetzt, wenn kleiner gleich 77
        if(isUnderSeventySeven(scores.myScore)) {
            myScore.textContent = "Score: " + scores.myScore;
        }
    }
    // Ändert den Punkestand des Gegners
    else if (turn === 2) {
        const rivalScore = document.getElementById("rival-score");
        scores.rivalScore = scores.rivalScore + diceNumber;
        // Score nur setzen, wenn kleiner gleich 77
        if(isUnderSeventySeven(scores.rivalScore)) {
            rivalScore.textContent = "Score: " + scores.rivalScore;
        }
    }

}



// Färbt die Kreise im Würfel auf die Hintergrundfarbe
function setCirclesToWhite(turn) {
    const circleLength = 7;
    // Setzt alle meine Kreise auf weiß
    if (turn === 1) {
        for (let i = 0; i<circleLength; i++) {
            MY_CIRCLES[i].setAttribute("fill", "white");
        }
    }
    // Setzt alle Gegner Kreise auf weiß
    else if (turn === 2) {
        for (let i = 0; i<circleLength; i++) {
            RIVAL_CIRCLES[i].setAttribute("fill", "white");
        }
    }
}



// Generiert eine zufällige Zahl von 1 bis max
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}



function displayDice(turn, diceNumber) {
    switch(diceNumber) {
        case 1:
            setCirclesToBlack(turn, 0, 1);
            break;
        case 2:
            setCirclesToBlack(turn, 1, 3);
            break;
        case 3:
            setCirclesToBlack(turn, 0, 3);
            break;
        case 4:
            setCirclesToBlack(turn, 1, 5);
            break;
        case 5:
            setCirclesToBlack(turn, 0, 5);
            break;
        case 6:
            setCirclesToBlack(turn, 1, 7);
            break;
        default:
            console.log("Fehler");
    }
}



// Stellt den gewürfelten Würfel dar
function createDice(turn) {
    return new Promise((resolve) => {
        let animations = 0;
        let diceNumber;
    
        // Zeitintervall erstellen --> Animation alle 25 ms wiederholt ausführen
        let intervalId = null;
        clearInterval(intervalId);
        intervalId = setInterval(createAnimation, 25);
    
        // Kreiert die Würfel-Animation
        function createAnimation() {
            if(animations === 50) {
                clearInterval(intervalId);
                updateScore(turn, diceNumber);
                resolve();
            } 
            else {
                animations++;
                setCirclesToWhite(turn);
                diceNumber = generateRandomNumber(6);
                displayDice(turn, diceNumber);
            }
        }
    });
}



function endGame(turn) {
    const rollDiceButton = document.getElementById("roll-button");
    rollDiceButton.removeEventListener("click", buttonHandler);
    const gameStatus = document.getElementById("game-status");

    if (turn === 1) {
        gameStatus.textContent = "You have won!";
    }
    else if (turn === 2) {
        gameStatus.textContent = "You have lost!";
    }
}



//Prüft ob jemand gewonnen hat
function checkWinner() {
    const scores = getScorePoints();
    // Wenn ich gewonnen habe
    if(scores.myScore === 77) {
        endGame(1);
        return true;
    }
    // Wenn der Gegner gewonnen hat
    else if(scores.rivalScore == 77) {
        endGame(2);
        return true;
    }
    else {
        return false;
    }
}



//Wenn ,,Roll Dice'' gedrückt wird, wird diese Funktion ausgeführt
function buttonHandler() {
    // Deaktiviere vorübergehend den ,,Roll Dice'' Button
    const rollDiceButton = document.getElementById("roll-button");
    rollDiceButton.removeEventListener('click', buttonHandler);

    console.log("Ich würfele");
    // Zuerst würfele ich
    createDice(1)
    // Erst wenn ich zu Ende gewürfelt habe, würfelt der Gegner mit einer Verzögerung von 1,75 Sekunden
    .then(() => {
        setTimeout(() => {
            console.log("Gegner würfelt");
            if(!checkWinner()) {
                createDice(2)
                // Prüft ob jemand gewonnen hat nachdem beide Spieler gewürfelt haben
                .then(() => {
                    console.log("Beide haben zu Ende gewürfelt");
                    if (!checkWinner()) {
                        rollDiceButton.addEventListener("click", buttonHandler);
                    }
                });
            }
        }, 1750);
    });
}


function restartGame() {
    // Setze alle Kreise auf weiß
    setCirclesToWhite(1);
    setCirclesToWhite(2);

    // Setze Spielstatus und die Punktzahlen zurück
    const gameStatus = document.getElementById("game-status");
    gameStatus.textContent = "";
    const myScore = document.getElementById("my-score");
    myScore.textContent = "Score: 0";
    const rivalScore = document.getElementById("rival-score");
    rivalScore.textContent = "Score: 0";

    // Fügt dem ,,Roll Dice'' Button wieder Funktionalität hinzu
    const rollDiceButton = document.getElementById("roll-button");
    rollDiceButton.addEventListener("click", buttonHandler);
}



startGame();