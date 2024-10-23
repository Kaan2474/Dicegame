import { createCircles, activateButton, deactivateButton, setText, createDice, getScorePoints, setCirclesToWhite} from "../ui/domHandler.js";


function startGame() {
    createCircles();
    // Aktiviere die Funktionalität des ,,Restart'' Button
    activateButton("restart-button", restartGame);
    // Setze den Spielstatus auf ,,Roll The Dice!''
    setText("game-status", "The Player Who Rolls The Bigger Number Starts!");
    setTimeout(() => {
        setText("game-status", "Roll The Dice!");
    }, 5000);
    // Aktiviere die Funktionalität des ,,Roll Dice'' Button für den ersten Zug
    activateButton("roll-button", firstMove);
}



function firstMove() {
    createDice(1)
    .then((result) => {
        const firstDiceNumber = result;
        console.log(firstDiceNumber);
        setTimeout(() => {
            createDice(2)
            .then((result) => {
                const secondDiceNumber = result;
                console.log(secondDiceNumber);
                compareDiceNumber(firstDiceNumber, secondDiceNumber);

            });
        }, 1750);
    });
}



function compareDiceNumber(firstDiceNumber, secondDiceNumber) {
    if (firstDiceNumber < secondDiceNumber) {
        setText("game-status", "Your Opponent Scored A Higher Number!");
        setTimeout(() => {
            setText("game-status", "It's Your Opponents Turn!");
            createDice(2)
            .then(() => {
                setText("game-status", "It's Your Turn!");
                setText("my-score", "Score: 0");
                setText("rival-score", "Score: 0");
                deactivateButton("roll-button", firstMove);
                activateButton("roll-button", buttonHandler);
            });
        }, 1750);
    }
    else if (firstDiceNumber > secondDiceNumber) {
        setText("game-status", "You Scored A Higher Number!");
        setTimeout(() => {
            setText("game-status", "Roll The Dice!");
            setText("my-score", "Score: 0");
            setText("rival-score", "Score: 0");
            deactivateButton("roll-button", firstMove);
            activateButton("roll-button", buttonHandler);
        }, 1750);
    }
    else {
        setText("game-status", "Roll The Dice Again!");
        setText("my-score", "Score: 0");
        setText("rival-score", "Score: 0");
    }
}




// Prüft ob der Score kleiner oder gleich 77 ist
export function isUnderSeventySeven(score) {
    if (score <= 77) {
        return true;
    }
    return false;
}



// Generiert eine zufällige Zahl von 1 bis max
export function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}



function endGame(turn) {
    deactivateRollDiceButton();
    if (turn === 1) {
        setGameStatus("You have won!");
    }
    else if (turn === 2) {
        setGameStatus("You have lost!");
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
    deactivateButton("roll-button", buttonHandler);

    console.log("Ich würfele");
    // Zuerst würfele ich
    createDice(1)
    // Erst wenn ich zu Ende gewürfelt habe, würfelt der Gegner mit einer Verzögerung von 1,75 Sekunden
    .then(() => {
        setText("game-status", "It's Your Opponents Turn!")
        setTimeout(() => {
            console.log("Gegner würfelt");
            if(!checkWinner()) {
                createDice(2)
                // Prüft ob jemand gewonnen hat nachdem beide Spieler gewürfelt haben
                .then(() => {
                    console.log("Beide haben zu Ende gewürfelt");
                    if (!checkWinner()) {
                        setText("game-status", "Roll The Dice!");
                        activateButton("roll-button", buttonHandler);
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
    
    deactivateButton("roll-button", buttonHandler);

    // Setze Spielstatus und die Punktzahlen zurück
    setText("game-status", "The Player Who Rolls The Bigger Number Starts!");
    setText("my-score", "Score: 0");
    setText("rival-score", "Score: 0");
    setTimeout(() => {
        setText("game-status", "Roll The Dice!");
        activateButton("roll-button", firstMove)
    }, 5000);
}



startGame();