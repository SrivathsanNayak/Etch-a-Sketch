const container = document.querySelector("#container");

function generateGrid (rows, cols) {
    container.style.setProperty("--grid-rows",rows);
    container.style.setProperty("--grid-cols",cols);

    for (let i = 0; i < (rows*cols); i++) {
        let gridItem = document.createElement("div");
        container.appendChild(gridItem).className = "grid-item";
    }
}

generateGrid(16,16);