const container = document.querySelector("#container");
const clearGridButton = document.querySelector("#clear-grid");

clearGridButton.addEventListener('click', clearGrid);
generateGrid(16, 16);

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
            cellNodeList[i].classList.add('changeColor');
        });
    }
}

function removeGrid() {
    document.querySelectorAll(".grid-item").forEach(function (a) {
        a.remove();
    });
}

function clearGrid() {
    /*let sizeOfGrid = parseInt(prompt("Number of squares per side for new grid?", 16));
    if (sizeOfGrid < 2 || sizeOfGrid > 100) {
        alert("Invalid number! Please enter a number between 2 and 100");
    } else if (sizeOfGrid >= 2 && sizeOfGrid <= 100) {
        generateGrid(sizeOfGrid, sizeOfGrid);
    } else {
        alert("Invalid number! Please enter a number between 2 and 100");
    }*/
    removeGrid();
    generateGrid(5, 5);
}