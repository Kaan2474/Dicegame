function buttonHandler() {
    createAnimation();
    const diceNumber = generateRandomNumber(6);
    createMyDice(diceNumber);
}


document.getElementById('roll-button').addEventListener('click', buttonHandler);


//Generiert eine zufällige Zahl von 1 bis max
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}


function createAnimation() {
    for(let i = 0; i<50; i++) {
        const diceNumber = generateRandomNumber(6);
        createMyDice(diceNumber);
    }
}


function setCircleAttributes(circle, cx, cy, r, fill) {
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", "20");
    circle.setAttribute("fill", "black");
}


function createMyDice(diceNumber) {
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
            setCircleAttributes(circle_1, "500", "150");
            svg.appendChild(circle_1);
            break;
        case 2:
            setCircleAttributes(circle_2, "450", "100");
            setCircleAttributes(circle_3, "550", "200");
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            break;
        case 3:
            setCircleAttributes(circle_1, "450", "100");
            setCircleAttributes(circle_2, "500", "150");
            setCircleAttributes(circle_3, "550", "200");
            svg.appendChild(circle_1);
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            break;
        case 4:
            setCircleAttributes(circle_1, "450", "100");
            setCircleAttributes(circle_2, "550", "100");
            setCircleAttributes(circle_3, "450", "200");
            setCircleAttributes(circle_4, "550", "200");
            svg.appendChild(circle_1);
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            svg.appendChild(circle_4);
            break;
        case 5:
            setCircleAttributes(circle_1, "450", "100");
            setCircleAttributes(circle_2, "550", "100");
            setCircleAttributes(circle_3, "500", "150");
            setCircleAttributes(circle_4, "450", "200");
            setCircleAttributes(circle_5, "550", "200");
            svg.appendChild(circle_1);
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            svg.appendChild(circle_4);
            svg.appendChild(circle_5);
            break;
        case 6:
            setCircleAttributes(circle_1, "450", "100");
            setCircleAttributes(circle_2, "450", "150");
            setCircleAttributes(circle_3, "550", "150");
            setCircleAttributes(circle_4, "550", "100");
            setCircleAttributes(circle_5, "450", "200");
            setCircleAttributes(circle_6, "550", "200");
            svg.appendChild(circle_1);
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            svg.appendChild(circle_4);
            svg.appendChild(circle_5);
            svg.appendChild(circle_6);
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
            svg.appendChild(circle_1);
            break;
        case 2:
            setCircleAttributes(circle_2, "1250", "100");
            setCircleAttributes(circle_3, "1350", "200");
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            break;
        case 3:
            setCircleAttributes(circle_1, "1250", "100");
            setCircleAttributes(circle_2, "1300", "150");
            setCircleAttributes(circle_3, "1350", "200");
            svg.appendChild(circle_1);
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            break;
        case 4:
            setCircleAttributes(circle_1, "1250", "100");
            setCircleAttributes(circle_2, "1350", "100");
            setCircleAttributes(circle_3, "1250", "200");
            setCircleAttributes(circle_4, "1350", "200");
            svg.appendChild(circle_1);
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            svg.appendChild(circle_4);
            break;
        case 5:
            setCircleAttributes(circle_1, "1250", "100");
            setCircleAttributes(circle_2, "1350", "100");
            setCircleAttributes(circle_3, "1300", "150");
            setCircleAttributes(circle_4, "1250", "200");
            setCircleAttributes(circle_5, "1350", "200");
            svg.appendChild(circle_1);
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            svg.appendChild(circle_4);
            svg.appendChild(circle_5);
            break;
        case 6:
            setCircleAttributes(circle_1, "1250", "100");
            setCircleAttributes(circle_2, "1250", "150");
            setCircleAttributes(circle_3, "1350", "150");
            setCircleAttributes(circle_4, "1350", "100");
            setCircleAttributes(circle_5, "1250", "200");
            setCircleAttributes(circle_6, "1350", "200");
            svg.appendChild(circle_1);
            svg.appendChild(circle_2);
            svg.appendChild(circle_3);
            svg.appendChild(circle_4);
            svg.appendChild(circle_5);
            svg.appendChild(circle_6);
            break;
    }
}