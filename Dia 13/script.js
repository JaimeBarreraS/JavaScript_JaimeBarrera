const apiURL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';
const referenceCardImg = document.getElementById('reference-card');
const drawnCardImg = document.getElementById('drawn-card');
const resultDiv = document.getElementById('result');
const newGameButton = document.getElementById('new-game');
let referenceCard, drawnCard, referenceCardCode, drawnCardCode;

document.getElementById('higher').addEventListener('click', () => guessCard('higher'));
document.getElementById('equal').addEventListener('click', () => guessCard('equal'));
document.getElementById('lower').addEventListener('click', () => guessCard('lower'));
newGameButton.addEventListener('click', startGame);

// Carga inicial del juego
startGame();

function startGame() {
    resultDiv.textContent = '';
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            referenceCard = cardValue(data.cards[0].value);
            drawnCard = cardValue(data.cards[1].value);

            referenceCardCode = data.cards[0].code;
            drawnCardCode = data.cards[1].code;

            referenceCardImg.src = `https://deckofcardsapi.com/static/img/${referenceCardCode}.png`;
            drawnCardImg.src = '';

            newGameButton.style.display = 'none';
        });
}

function guessCard(playerGuess) {
    if (referenceCard === undefined || drawnCard === undefined) return;

    const result = getResult(playerGuess);
    drawnCardImg.src = `https://deckofcardsapi.com/static/img/${drawnCardCode}.png`;

    resultDiv.textContent = `${result} La carta era ${drawnCardCode}`;
    newGameButton.style.display = 'block';
}

function getResult(playerGuess) {
    if (drawnCard > referenceCard && playerGuess === 'higher') {
        return '¡Correcto! La carta es mayor.';
    } else if (drawnCard < referenceCard && playerGuess === 'lower') {
        return '¡Correcto! La carta es menor.';
    } else if (drawnCard === referenceCard && playerGuess === 'equal') {
        return '¡Correcto! Las cartas son iguales.';
    } else {
        return '¡Incorrecto!';
    }
}

function cardValue(value) {
    const values = {
        "ACE": 14,
        "KING": 13,
        "QUEEN": 12,
        "JACK": 11
    };
    return values[value] || parseInt(value);
}
