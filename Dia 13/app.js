let deckId = '';
const stockPile = document.querySelector('.stock');
const wastePile = document.querySelector('.waste');
const tableauPiles = document.querySelectorAll('.tableau .pile');
const foundationPiles = document.querySelectorAll('.foundation');

let stock = [];
let waste = [];

// Obtener un nuevo mazo de la API de póker
async function getDeck() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const data = await response.json();
        deckId = data.deck_id;
        drawStock(); // Robar todas las cartas para el stock
    } catch (error) {
        console.error('Error al obtener el mazo:', error);
    }
}

// Robar todas las cartas para el stock
async function drawStock() {
    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`);
        const data = await response.json();
        stock = data.cards;
        console.log('Cartas del stock:', stock);
        updateStock();
        dealTableau(); // Repartir las primeras cartas en el tableau
    } catch (error) {
        console.error('Error al robar cartas:', error);
    }
}

// Mostrar cartas en el stock
function updateStock() {
    stockPile.innerText = stock.length > 0 ? 'stock' : 'Empty';
}

// Repartir cartas en el tableau
function dealTableau() {
    for (let i = 0; i < tableauPiles.length; i++) {
        let cardsInPile = i + 1; // Columnas incrementan en cantidad de cartas
        for (let j = 0; j < cardsInPile; j++) {
            const card = stock.pop();
            const cardElement = createCardElement(card);
            tableauPiles[i].appendChild(cardElement);
        }
    }
    updateStock();
}

// Mover cartas del stock al waste
stockPile.addEventListener('click', function () {
    if (stock.length > 0) {
        const card = stock.pop();
        waste.push(card);
        updateWaste();
        updateStock();
    }
});

function updateWaste() {
    wastePile.innerHTML = ''; // Limpiar el waste pile
    if (waste.length > 0) {
        const topCard = waste[waste.length - 1];
        const cardElement = createCardElement(topCard);
        wastePile.appendChild(cardElement);
    }
}

// Crear la representación de una carta
function createCardElement(cardData) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${cardData.image})`;
    card.style.width = '120px';
    card.style.height = '165px';
    card.style.borderRadius = '10px';
    card.style.backgroundSize = 'cover';
    card.draggable = true;
    card.dataset.code = cardData.code;

    // Añadir eventos para mover cartas
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
    return card;
}

// Lógica de arrastrar y soltar cartas
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.code);
}

function handleDragEnd(e) {
    console.log('Arrastre finalizado');
}

// Soltar cartas en las columnas o fundaciones
document.querySelectorAll('.tableau, .foundation').forEach(pile => {
    pile.addEventListener('dragover', e => {
        e.preventDefault();
    });

    pile.addEventListener('drop', e => {
        e.preventDefault();
        const cardCode = e.dataTransfer.getData('text/plain');
        console.log('Carta soltada:', cardCode);
        // Aquí puedes agregar la lógica para mover cartas según las reglas
    });
});

// Inicializar el juego
getDeck();
