const container = document.querySelector('.container');
const clearBtn = document.getElementById('clearBtn');
const changeSizeBtn = document.getElementById('changeSizeBtn');
const colorPick = document.getElementById('pickColor');
const blackBtn = document.getElementById('blackBtn');
const randomBtn = document.getElementById('randomBtn');
const eraserBtn = document.getElementById('eraserBtn');

let color;

function createGrid(gridNum) {
    let gridArea = gridNum * gridNum;

    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;

    for (let i = 1; i <= gridArea; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-item');

        // By default it's the color black
        gridSquare.addEventListener('mouseover', (e) => {
            updateColor(e, 'black')
        });

        container.appendChild(gridSquare);
    }
}

function updateColor(e, choice) {
    switch (choice) {
        case 'black':
            color = 'black';
            e.target.style.backgroundColor = color;
            break;
        case 'erase':
            color = 'white';
            e.target.style.backgroundColor = color;
            break;
        case 'random':
            color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            e.target.style.backgroundColor = color;
            break;
        case 'pick':
            color = colorPick.value;
            e.target.style.backgroundColor = color;
            break; 
    }
}

function clearGrid() {
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

// Color Buttons Event Listeners
blackBtn.addEventListener('click', () => {
    Array.from(container.children).forEach(item => {
        item.addEventListener('mouseover', (e) => {
            updateColor(e, 'black');
        });
    })
})

colorPick.addEventListener('click', () => {
    Array.from(container.children).forEach(item => {
        item.addEventListener('mouseover', (e) => {
            updateColor(e, 'pick');
        });
    })
})

randomBtn.addEventListener('click', () => {
    Array.from(container.children).forEach(item => {
        item.addEventListener('mouseover', (e) => {
            updateColor(e, 'random');
        });
    })
})

eraserBtn.addEventListener('click', () => {
    Array.from(container.children).forEach(item => {
        item.addEventListener('mouseover', (e) => {
            updateColor(e, 'erase');
        });
    })
})