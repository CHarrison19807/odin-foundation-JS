const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';

let currentColor = DEFAULT_COLOR;
let size = DEFAULT_SIZE;



const container = document.querySelector('#container');
container.setAttribute('class', 'container');

const gridContainer = document.createElement('div');

const colorButtons = document.createElement('div');
colorButtons.setAttribute('class', 'color-buttons');

const randomColorButton = document.createElement('button');
randomColorButton.textContent = 'Random Color';
randomColorButton.setAttribute('class', 'random-button');

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Sketch';
resetButton.setAttribute('class', 'reset-button');



function createGrid(squarePerRow) {
    for (let i = 0; i < squarePerRow; i++) {
        const gridCol = document.createElement('div');

        for (let j = 0; j < squarePerRow; j++) {
            const gridElement = document.createElement('div');
            gridElement.setAttribute('class', 'gridElement');

            gridElement.addEventListener('mouseover', () => {
                if (currentColor == 'random') {
                    gridElement.style.backgroundColor = randomColor();
                }

                else if  (currentColor == DEFAULT_COLOR) {
                    gridElement.style.backgroundColor = DEFAULT_COLOR;
                }
            });
            gridCol.appendChild(gridElement);
        }
        gridCol.setAttribute('class', 'gridCol');
        gridContainer.appendChild(gridCol);
    }
    gridContainer.setAttribute('class', 'gridContainer');
    container.appendChild(gridContainer);
}

function randomColor() {
    color = Math.floor(Math.random() * 256);
}

function resetGrid() {
    clearGrid();
    createGrid(size);
}

function clearGrid() {
    gridContainer.innerHTML = '';
}

function assignColor(colorAssignment) {
    currentColor = colorAssignment;
}

createGrid(DEFAULT_SIZE);
colorButtons.appendChild(randomColorButton);
colorButtons.appendChild(resetButton);
container.appendChild(colorButtons);
