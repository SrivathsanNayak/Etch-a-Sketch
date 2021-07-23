const container = document.querySelector("#container");
const newGridButton = document.querySelector("#new-grid");
const blackButton = document.querySelector("#black-btn");
const randomButton = document.querySelector("#random-btn");
const colorPicker = document.querySelector("#color-picker");
const body = document.querySelector("body");

//Initial setup for grid generation with black color trace
newGridButton.addEventListener('click', newGrid);
generateGrid(16, 16);
let hexCode = "#000";

//clicking on blackButton gives black trace
blackButton.addEventListener('click', () => {
    hexCode = "#000";
});

//randomButton gives random color trace
randomButton.addEventListener('click', () => {
    hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

//colorPicker allows default color picker
colorPicker.addEventListener('focus', () => {
    hexCode = colorPicker.value;
});

/*
Shortcuts for buttons
newGridButton - n
blackButton - b
randomButton - r
colorPicker - c
*/
body.addEventListener('keydown', function (e) {
    if (e.key === 'b') {
        hexCode = "#000";
    }
});

body.addEventListener('keydown', function(e) {
    if (e.key === 'r') {
        hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
});

body.addEventListener('keypress', function(e) {
    if (e.key === 'c') {
        hexCode = colorPicker.value;
    }
});

body.addEventListener('keypress', function(e) {
    if (e.key === 'n') {
        newGrid();
    }
});

/*
Function to generate grid based on input obtained
This appends grid cells to the grid container
And creates a node list
*/
function generateGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < (rows * cols); i++) {
        let gridItem = document.createElement("div");
        container.appendChild(gridItem).className = "grid-item";
    }
    createNodeList();
}

/*
Node list is created along with background color initialization
hexCode shows current color for trace
nodelist is used for multiple grid cells
*/
function createNodeList() {
    let cellNodeList = document.querySelectorAll(".grid-item");
    for (let i = 0; i < cellNodeList.length; i++) {
        cellNodeList[i].addEventListener('mouseover', () => {
            cellNodeList[i].style.backgroundColor = hexCode;
        });
    }
}

/*
Removes grid cells and initializes hexCode with black
*/
function removeGrid() {
    document.querySelectorAll(".grid-item").forEach(function (a) {
        a.remove();
    });
    hexCode = "#000";
}

/*
Function for new grid first removes grid
Then prompts user for new grid input
*/
function newGrid() {
    removeGrid();
    let sizeOfGrid = parseInt(prompt("Number of squares per side for new grid?", 16));
    if (sizeOfGrid < 2 || sizeOfGrid > 75) {
        alert("Invalid number! Please enter a number between 2 and 75");
    } else if (sizeOfGrid >= 2 && sizeOfGrid <= 75) {
        generateGrid(sizeOfGrid, sizeOfGrid);
    } else {
        alert("Invalid! Please enter a number between 2 and 75");
    }
}