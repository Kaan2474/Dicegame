import { generateRandomNumber, isUnderSeventySeven } from "../logic/gameLogic.js";

// Meine Kreise
const MY_CIRCLES = [];

// Kreise des Gegners
const RIVAL_CIRCLES = [];



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



// Erstellt alle Kreise, welche als Würfelzahlen dienen und fügt die Kreise dem SVG hinzu
export function createCircles() {
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



// Fügt dem übergebenem Button die übergebene Funktionalität hinzu
export function activateButton(buttonId, callback) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', callback);
}



// Entfernt die Funktionalität des übergebenen Button
export function deactivateButton(buttonId, callback) {
    const button = document.getElementById(buttonId);
    button.removeEventListener('click', callback);
}



export function setText(textId, text) {
    const textArea = document.getElementById(textId);
    textArea.innerText = text;
}


function getText(textId) {
    const textArea = document.getElementById(textId);
    return textArea.innerText;
}



export function getScorePoints() {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const scores = {};

    // Mein Punktestand
    let score = getText("my-score");
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
    score = getText("rival-score");
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
        scores.myScore = scores.myScore + diceNumber;
        // Score wird nur gesetzt, wenn kleiner gleich 77
        if(isUnderSeventySeven(scores.myScore)) {
            const score = "Score: " + scores.myScore;
            setText("my-score", score);
        }
    }
    // Ändert den Punkestand des Gegners
    else if (turn === 2) {
        scores.rivalScore = scores.rivalScore + diceNumber;
        // Score nur setzen, wenn kleiner gleich 77
        if(isUnderSeventySeven(scores.rivalScore)) {
            const score = "Score: " + scores.rivalScore;
            setText("rival-score", score);
        }
    }

}



// Färbt die Kreise im Würfel in dem gegebenen Intervall schwarz: from - to
function setCirclesToBlack(turn, from, to) {
    for (let i = from; i<to; i++) {
        turn === 1 ? MY_CIRCLES[i].setAttribute("fill", "black") : RIVAL_CIRCLES[i].setAttribute("fill", "black");
    }
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



// Färbt die Kreise im Würfel auf die Hintergrundfarbe
export function setCirclesToWhite(turn) {
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



// Stellt den gewürfelten Würfel dar
export function createDice(turn) {
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
                resolve(diceNumber);
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