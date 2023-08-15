const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;



const container = document.querySelector("#container");
container.classList.add("container");

const gridContainer = document.createElement("div");

const colorButtons = document.createElement("div");
colorButtons.classList.add("color-buttons");

const randomColorButton = document.createElement("button");
randomColorButton.textContent = "Random Color";
randomColorButton.addEventListener("click", () => {
    assignColor('random');
    resetGrid();
});
randomColorButton.classList.add("random-button");

const blackColorButton = document.createElement("button");
blackColorButton.textContent = "Black";
blackColorButton.addEventListener("click", () => {
    assignColor('black');
    resetGrid();
});

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Sketch";
resetButton.addEventListener("click", resetGrid);
resetButton.classList.add("reset-button");

colorButtons.appendChild(blackColorButton);
colorButtons.appendChild(randomColorButton);
colorButtons.appendChild(resetButton);
container.appendChild(colorButtons);



function createGrid(squarePerRow) {
    for (let i = 0; i < squarePerRow; i++) {
        const gridCol = document.createElement("div");

        for (let j = 0; j < squarePerRow; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");

            gridElement.addEventListener("mouseover", () => {
                if (currentColor == "random") {
                    gridElement.style.backgroundColor = randomColor();
                }

                else if  (currentColor == DEFAULT_COLOR) {
                    gridElement.style.backgroundColor = DEFAULT_COLOR;
                }
            });
            gridCol.appendChild(gridElement);
        }
        gridCol.setAttribute("class", "gridCol");
        gridContainer.appendChild(gridCol);
    }
    gridContainer.setAttribute("class", "gridContainer");
    container.insertBefore(gridContainer, colorButtons);
}

function randomNumber() {
    let randNumber = Math.floor(Math.random() * 256);
    return randNumber;
}

function randomColor() {
    let randColor = "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
    return randColor;
}

function resetGrid() {
    clearGrid();
    createGrid(currentSize);
}

function clearGrid() {
    gridContainer.innerHTML = "";
}

function assignColor(colorAssignment) {
    currentColor = colorAssignment;
}

createGrid(DEFAULT_SIZE);

