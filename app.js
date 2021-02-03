const container = document.querySelector('.container');
const clearBtn = document.getElementById('clearBtn');
const changeSizeBtn = document.getElementById('changeSizeBtn');
const colorPick = document.getElementById('pickColor');
const blackBtn = document.getElementById('blackBtn');
const randomBtn = document.getElementById('randomBtn');
const eraserBtn = document.getElementById('eraserBtn');

let color = 'black';

function createGrid(gridNum) {
    let gridArea = gridNum * gridNum;

    // Define the grid
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;

    for (let i = 1; i <= gridArea; i++) {
        // Create square and give it a class
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-item');

        // By default it's the color black
        gridSquare.addEventListener('mouseover', blackColor);

        // Add square to container
        container.appendChild(gridSquare);
    }
}


function randomColor(e) {
    // Create a random color
    color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    e.target.style.backgroundColor = color;
}

function pickColor(e) {
    // Color you picked
    color = colorPick.value;
    
    e.target.style.backgroundColor = color;
}

function blackColor(e) {
    color = 'black';
    
    e.target.style.backgroundColor = color;
}

function eraseColor(e) {
    color = 'white';

    e.target.style.backgroundColor = color;
}

function updateColor(x) {
    switch (x) {
        case 'black':
            blackColor(e);
            break;
        case 'random':
            randomColor(e);
            break;
        case 'pick':
            pickColor(e);
            break;
        // case 'greyscale':
        //     greyscaleColor(e);
        //     break;
    }
}

//
//
//
// 
// 
// 
// 
// 

function clearGrid() {
    // Go through each square and set its background color to white
    Array.from(container.children).forEach(item => {
        item.style.backgroundColor = '#fff';
    })
}

function changeGridSize() {
    let newGridSize = prompt('Enter a new size for your grid (between 1 - 64)', 16);

    if (newGridSize < 1 || newGridSize > 64 || Number.isNaN(newGridSize)) {
        alert("Enter a number between 1 and 64.");
        changeGridSize();
    } else {
        clearGrid();
        removeGrid();
        createGrid(newGridSize);
    }
}

function removeGrid() {
    Array.from(container.children).forEach(item => {
        container.removeChild(item);
    })
}


// Event Listeners
window.addEventListener('load', createGrid(16));
clearBtn.addEventListener('click', clearGrid);
changeSizeBtn.addEventListener('click', changeGridSize);


// Color buttons
blackBtn.addEventListener('click', () => {
    Array.from(container.children).forEach(item => {
        item.removeEventListener('mouseover', pickColor);
        item.removeEventListener('mouseover', randomColor);
        item.removeEventListener('mouseover', eraseColor);
        item.addEventListener('mouseover', blackColor);
    })
})

colorPick.addEventListener('click', () => {
    Array.from(container.children).forEach(item => {
        item.removeEventListener('mouseover', blackColor);
        item.removeEventListener('mouseover', randomColor);
        item.removeEventListener('mouseover', eraseColor);
        item.addEventListener('mouseover', pickColor);
    })
})

randomBtn.addEventListener('click', () => {
    Array.from(container.children).forEach(item => {
        item.removeEventListener('mouseover', blackColor);
        item.removeEventListener('mouseover', pickColor);
        item.removeEventListener('mouseover', eraseColor);
        item.addEventListener('mouseover', randomColor);
    })
})

eraserBtn.addEventListener('click', () => {
    Array.from(container.children).forEach(item => {
        item.removeEventListener('mouseover', blackColor);
        item.removeEventListener('mouseover', pickColor);
        item.removeEventListener('mouseover', randomColor);
        item.addEventListener('mouseover', eraseColor);
    })
})