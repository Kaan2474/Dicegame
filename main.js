const SVG = document.querySelector("svg");
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const CIRCLE_ONE = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_TWO = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_THREE = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_FOUR = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_FIVE = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_SIX = document.createElementNS(SVG_NAMESPACE, "circle");
const CIRCLE_SEVEN = document.createElementNS(SVG_NAMESPACE, "circle");
const ALL_CIRCLES = [CIRCLE_ONE, CIRCLE_TWO, CIRCLE_THREE, CIRCLE_FOUR, CIRCLE_FIVE, CIRCLE_SIX, CIRCLE_SEVEN];


//Fügt die Kreise dem SVG zu
function appendCirclesToSvg() {
    const circleSize = ALL_CIRCLES.length;
    for(let i = 0; i<circleSize; i++) {
        SVG.appendChild(ALL_CIRCLES[i]);
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
    setAttributes(CIRCLE_ONE, "500", "150", "white")
    setAttributes(CIRCLE_TWO, "450", "100", "white")
    setAttributes(CIRCLE_THREE, "550", "200", "white")
    setAttributes(CIRCLE_FOUR, "550", "100", "white")
    setAttributes(CIRCLE_FIVE, "450", "200", "white")
    setAttributes(CIRCLE_SIX, "450", "150", "white")
    setAttributes(CIRCLE_SEVEN, "550", "150", "white")
}


//Wenn ,,Roll Dice'' gedrückt wird passiert folgendes:
function buttonHandler() {
    const diceNumber = generateRandomNumber(6);
    createMyDice(diceNumber);
}


//Generiert eine zufällige Zahl von 1 bis max
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}


//Färbt alle Kreise weiß
function setAllCirclesToWhite() {
    const circleLength = ALL_CIRCLES.length;
    for(let i = 0; i<circleLength; i++) {
        ALL_CIRCLES[i].setAttribute("fill", "white");
    }
}


/*
cx und cy Koordinaten der Kreise
CIRCLE_ONE, 500, 150
CIRCLE_TWO, 450, 100
CIRCLE_THREE, 550, 200
CIRCLE_FOUR, 550, 100
CIRCLE_FIVE, 450, 200
CIRCLE_SIX, 450, 150
CIRCLE_SEVEN, 550, 150 
*/
function createMyDice(diceNumber) {
    setAllCirclesToWhite();
    switch(diceNumber) {
        case 1:
            CIRCLE_ONE.setAttribute("fill", "black");
            break;
        case 2:
            CIRCLE_TWO.setAttribute("fill", "black");
            CIRCLE_THREE.setAttribute("fill", "black");
            break;
        case 3:
            CIRCLE_ONE.setAttribute("fill", "black");
            CIRCLE_TWO.setAttribute("fill", "black");
            CIRCLE_THREE.setAttribute("fill", "black");
            break;
        case 4:
            CIRCLE_TWO.setAttribute("fill", "black");
            CIRCLE_THREE.setAttribute("fill", "black");
            CIRCLE_FOUR.setAttribute("fill", "black");
            CIRCLE_FIVE.setAttribute("fill", "black");
            break;
        case 5:
            CIRCLE_ONE.setAttribute("fill", "black");
            CIRCLE_TWO.setAttribute("fill", "black");
            CIRCLE_THREE.setAttribute("fill", "black");
            CIRCLE_FOUR.setAttribute("fill", "black");
            CIRCLE_FIVE.setAttribute("fill", "black");
            break;
        case 6:
            CIRCLE_TWO.setAttribute("fill", "black");
            CIRCLE_THREE.setAttribute("fill", "black");
            CIRCLE_FOUR.setAttribute("fill", "black");
            CIRCLE_FIVE.setAttribute("fill", "black");
            CIRCLE_SIX.setAttribute("fill", "black");
            CIRCLE_SEVEN.setAttribute("fill", "black");
            break;
    }
}


function createRivalDice(diceNumber) {
    const svg = document.querySelector("svg");
    const svgNamespace = "http://www.w3.org/2000/svg";
    const circle_1 = document.createElementNS(svgNamespace, "circle");
    const circle_2 = document.createElementNS(svgNamespace, "circle");
    const circle_3 = document.createElementNS(svgNamespace, "circle");
    const circle_4 = document.createElementNS(svgNamespace, "circle");
    const circle_5 = document.createElementNS(svgNamespace, "circle");
    const circle_6 = document.createElementNS(svgNamespace, "circle");


    switch(diceNumber) {
        case 1:
            setCircleAttributes(circle_1, "1300", "150");
            break;
        case 2:
            setCircleAttributes(circle_2, "1250", "100");
            setCircleAttributes(circle_3, "1350", "200");
            break;
        case 3:
            setCircleAttributes(circle_1, "1250", "100");
            setCircleAttributes(circle_2, "1300", "150");
            setCircleAttributes(circle_3, "1350", "200");
            break;
        case 4:
            setCircleAttributes(circle_1, "1250", "100");
            setCircleAttributes(circle_2, "1350", "100");
            setCircleAttributes(circle_3, "1250", "200");
            setCircleAttributes(circle_4, "1350", "200");
            break;
        case 5:
            setCircleAttributes(circle_1, "1250", "100");
            setCircleAttributes(circle_2, "1350", "100");
            setCircleAttributes(circle_3, "1300", "150");
            setCircleAttributes(circle_4, "1250", "200");
            setCircleAttributes(circle_5, "1350", "200");
            break;
        case 6:
            setCircleAttributes(circle_1, "1250", "100");
            setCircleAttributes(circle_2, "1250", "150");
            setCircleAttributes(circle_3, "1350", "150");
            setCircleAttributes(circle_4, "1350", "100");
            setCircleAttributes(circle_5, "1250", "200");
            setCircleAttributes(circle_6, "1350", "200");
            break;
    }
}


appendCirclesToSvg();
setCircleAttributes();
document.getElementById('roll-button').addEventListener('click', buttonHandler);
