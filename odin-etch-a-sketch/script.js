const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';

let currentColor = DEFAULT_COLOR;
let size = DEFAULT_SIZE;



const container = document.querySelector('#container');
container.setAttribute('class', 'container');

const gridContainer = document.createElement('div');




function createGrid(squarePerRow) {
    for (let i = 0; i < squarePerRow; i++) {
        const gridCol = document.createElement('div');

        for (let j = 0; j < squarePerRow; j++) {
            const gridElement = document.createElement('div');
            gridElement.setAttribute('class', 'gridElement');

            gridElement.addEventListener('click', () => {
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

createGrid(DEFAULT_SIZE);
