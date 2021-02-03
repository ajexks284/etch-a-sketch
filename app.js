const container = document.querySelector('.container');
const clearBtn = document.getElementById('clearBtn');
const changeSizeBtn = document.getElementById('changeSizeBtn');

function createGrid(gridNum) {
    let gridArea = gridNum * gridNum;

    // Define the grid
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;

    for (let i = 1; i <= gridArea; i++) {
        // Create square and give it a class
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-item');

        // Add hover event listener
        gridSquare.addEventListener('mouseover', changeColor);

        // Add square to container
        container.appendChild(gridSquare);
    }
}

function changeColor(e) {
    // Create a random color
    let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    e.target.style.backgroundColor = color;
}

function clearGrid() {
    let gridItems = container.children; 

    // Go through each square and set its background color to white
    Array.from(gridItems).forEach(item => {
        item.style.backgroundColor = '#fff';
    })
}

function changeGridSize() {
    let newGridSize = prompt('Enter a new size for your grid (between 1 - 100)', 16);

    if (newGridSize < 1 || newGridSize > 100 || Number.isNaN(newGridSize)) {
        alert("Enter a number between 1 and 100.");
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