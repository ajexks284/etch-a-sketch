const container = document.querySelector('.container');

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
        // gridSquare.addEventListener('mouseover', changeColor);

        // Add square to container
        container.appendChild(gridSquare);
    }
}





window.addEventListener('load', createGrid(16));