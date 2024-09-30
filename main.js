const SVG = document.querySelector("svg");
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const CIRCLE_1 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_2 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_3 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_4 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_5 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_6 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_7 = document.createElementNS(SVG_NAMESPACE, "circle");
const MY_CIRCLES = [CIRCLE_1, CIRCLE_2, CIRCLE_3, CIRCLE_4, CIRCLE_5, CIRCLE_6, CIRCLE_7];

//Kreise des Gegners
const CIRCLE_8 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_9 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_10 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_11= document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_12= document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_13 = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_14 = document.createElementNS(SVG_NAMESPACE, "circle");
const RIVAL_CIRCLES = [CIRCLE_8, CIRCLE_9, CIRCLE_10, CIRCLE_11, CIRCLE_12, CIRCLE_13, CIRCLE_14];

const rollDiceButton = document.getElementById("roll-button");
rollDiceButton.addEventListener('click', buttonHandler);

let myScorePoints = 0;
let rivalScorePoints = 0;


//Fügt die Kreise dem SVG zu
function appendCirclesToSvg() {
    const circleSize = 7;
    for(let i = 0; i<circleSize; i++) {
        SVG.appendChild(MY_CIRCLES[i]);
        SVG.appendChild(RIVAL_CIRCLES[i]);
    }
}


//Vorlage um die Attribute der Kreise zu setzen
function setAttributes(circle, cx, cy, color) {
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", "20");
    circle.setAttribute("fill", color);
}


//Setzt die Attribute der Kreise
function setCircleAttributes() {
    //Meine Kreise
    setAttributes(CIRCLE_1, "500", "150", "white")
    setAttributes(CIRCLE_2, "450", "100", "white")
    setAttributes(CIRCLE_3, "550", "200", "white")
    setAttributes(CIRCLE_4, "550", "100", "white")
    setAttributes(CIRCLE_5, "450", "200", "white")
    setAttributes(CIRCLE_6, "450", "150", "white")
    setAttributes(CIRCLE_7, "550", "150", "white")
    //Gegner Kreise
    setAttributes(CIRCLE_8, "1300", "150", "white")
    setAttributes(CIRCLE_9, "1250", "100", "white")
    setAttributes(CIRCLE_10, "1350", "200", "white")
    setAttributes(CIRCLE_11, "1350", "100", "white")
    setAttributes(CIRCLE_12, "1250", "200", "white")
    setAttributes(CIRCLE_13, "1250", "150", "white")
    setAttributes(CIRCLE_14, "1350", "150", "white")
}


//Generiert eine zufällige Zahl von 1 bis max
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}


function isUnderSeventySeven(score) {
    if(score <= 77) {
        return true;
    }
    return false;
}


function updateMyScore(diceNumber) {
    const myScore = document.getElementById("my-score");
    myScorePoints = myScorePoints + diceNumber;
    if(isUnderSeventySeven(myScorePoints)) {
        myScore.textContent = "Score: " + myScorePoints;
    }
    else {
        myScorePoints = myScorePoints - diceNumber;
    }
}


function updateRivalScore(diceNumber) {
    const rivalScore = document.getElementById("rival-score");
    rivalScorePoints = rivalScorePoints + diceNumber;
    if(isUnderSeventySeven(rivalScorePoints)) {
        rivalScore.textContent = "Score: " + rivalScorePoints;
    }
    else {
        rivalScorePoints = rivalScorePoints - diceNumber;
    }
}


//Färbt alle meine Kreise weiß
function setMyCirclesToWhite() {
    const circleLength = MY_CIRCLES.length;
    for(let i = 0; i<circleLength; i++) {
        MY_CIRCLES[i].setAttribute("fill", "white");
    }
}


/*
cx und cy Koordinaten der Kreise
CIRCLE_1, 500, 150
CIRCLE_2, 450, 100
CIRCLE_3, 550, 200
CIRCLE_4, 550, 100
CIRCLE_5, 450, 200
CIRCLE_6, 450, 150
CIRCLE_7, 550, 150 
*/
function createMyDice() {
    setMyCirclesToWhite();
    const diceNumber = generateRandomNumber(6);
    switch(diceNumber) {
        case 1:
            CIRCLE_1.setAttribute("fill", "black");
            break;
        case 2:
            CIRCLE_2.setAttribute("fill", "black");
            CIRCLE_3.setAttribute("fill", "black");
            break;
        case 3:
            CIRCLE_1.setAttribute("fill", "black");
            CIRCLE_2.setAttribute("fill", "black");
            CIRCLE_3.setAttribute("fill", "black");
            break;
        case 4:
            CIRCLE_2.setAttribute("fill", "black");
            CIRCLE_3.setAttribute("fill", "black");
            CIRCLE_4.setAttribute("fill", "black");
            CIRCLE_5.setAttribute("fill", "black");
            break;
        case 5:
            CIRCLE_1.setAttribute("fill", "black");
            CIRCLE_2.setAttribute("fill", "black");
            CIRCLE_3.setAttribute("fill", "black");
            CIRCLE_4.setAttribute("fill", "black");
            CIRCLE_5.setAttribute("fill", "black");
            break;
        case 6:
            CIRCLE_2.setAttribute("fill", "black");
            CIRCLE_3.setAttribute("fill", "black");
            CIRCLE_4.setAttribute("fill", "black");
            CIRCLE_5.setAttribute("fill", "black");
            CIRCLE_6.setAttribute("fill", "black");
            CIRCLE_7.setAttribute("fill", "black");
            break;
        default:
            console.log("Fehler");
    }
    updateMyScore(diceNumber);
}


//Färbt alle Gegner Kreise weiß
function setRivalCirclesToWhite() {
    const circleLength = RIVAL_CIRCLES.length;
    for(let i = 0; i<circleLength; i++) {
        RIVAL_CIRCLES[i].setAttribute("fill", "white");
    }
}


/*
cx und cy Koordinaten der Kreise
CIRCLE_8, 1300, 150
CIRCLE_9, 1250, 100
CIRCLE_10, 1350, 200
CIRCLE_11, 1350, 100
CIRCLE_12, 1250, 200
CIRCLE_13, 1250, 150
CIRCLE_14, 1350, 150 
*/
function createRivalDice() {
    setRivalCirclesToWhite();
    const diceNumber = generateRandomNumber(6);
    switch(diceNumber) {
        case 1:
            CIRCLE_8.setAttribute("fill", "black");
            break;
        case 2:
            CIRCLE_9.setAttribute("fill", "black");
            CIRCLE_10.setAttribute("fill", "black");
            break;
        case 3:
            CIRCLE_8.setAttribute("fill", "black");
            CIRCLE_9.setAttribute("fill", "black");
            CIRCLE_10.setAttribute("fill", "black");
            break;
        case 4:
            CIRCLE_9.setAttribute("fill", "black");
            CIRCLE_10.setAttribute("fill", "black");
            CIRCLE_11.setAttribute("fill", "black");
            CIRCLE_12.setAttribute("fill", "black");
            break;
        case 5:
            CIRCLE_8.setAttribute("fill", "black");
            CIRCLE_9.setAttribute("fill", "black");
            CIRCLE_10.setAttribute("fill", "black");
            CIRCLE_11.setAttribute("fill", "black");
            CIRCLE_12.setAttribute("fill", "black");
            break;
        case 6:
            CIRCLE_9.setAttribute("fill", "black");
            CIRCLE_10.setAttribute("fill", "black");
            CIRCLE_11.setAttribute("fill", "black");
            CIRCLE_12.setAttribute("fill", "black");
            CIRCLE_13.setAttribute("fill", "black");
            CIRCLE_14.setAttribute("fill", "black");
            break;
        default:
            console.log("Fehler");
    }
    updateRivalScore(diceNumber);
    rollDiceButton.addEventListener("click", buttonHandler);
}


function checkWinner() {
    const gameStatus = document.getElementById("game-status");
    if(myScorePoints === 77) {
        rollDiceButton.removeEventListener("click", buttonHandler);
        gameStatus.textContent = "You have won!";
    }
    else if(rivalScorePoints == 77) {
        rollDiceButton.removeEventListener("click", buttonHandler);
        gameStatus.textContent = "You have lost!";
    }
}


//Wenn ,,Roll Dice'' gedrückt wird passiert folgendes:
function buttonHandler() {
    rollDiceButton.removeEventListener('click', buttonHandler);
    createMyDice();
    checkWinner();
    createRivalDice();
    checkWinner();
}


appendCirclesToSvg();
setCircleAttributes();
