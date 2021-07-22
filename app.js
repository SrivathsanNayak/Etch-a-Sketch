const container = document.querySelector("#container");
const newGridButton = document.querySelector("#new-grid");
const blackButton = document.querySelector("#black-btn");
const randomButton = document.querySelector("#random-btn");
const colorPickerButton = document.querySelector("#color-picker-btn");

newGridButton.addEventListener('click', newGrid);
generateGrid(16, 16);
let hexCode = "#000";

blackButton.addEventListener('click', () => {
    hexCode = "#000";
});

randomButton.addEventListener('click', () => {
    hexCode = "#"+Math.floor(Math.random()*16777215).toString(16);
});

function generateGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < (rows * cols); i++) {
        let gridItem = document.createElement("div");
        container.appendChild(gridItem).className = "grid-item";
    }
    createNodeList();
}

function createNodeList() {
    let cellNodeList = document.querySelectorAll(".grid-item");
    for (let i = 0; i < cellNodeList.length; i++) {
        cellNodeList[i].addEventListener('mouseover', () => {
            cellNodeList[i].style.backgroundColor = hexCode;
            console.log(hexCode);
        });
    }
}

function removeGrid() {
    document.querySelectorAll(".grid-item").forEach(function (a) {
        a.remove();
    });
    hexCode = "#000";
}

function newGrid() {
    removeGrid();
    let sizeOfGrid = parseInt(prompt("Number of squares per side for new grid?", 16));
    if (sizeOfGrid < 2 || sizeOfGrid > 100) {
        alert("Invalid number! Please enter a number between 2 and 100");
    } else if (sizeOfGrid >= 2 && sizeOfGrid <= 100) {
        generateGrid(sizeOfGrid, sizeOfGrid);
    } else {
        alert("Invalid! Please enter a number between 2 and 100");
    }
}