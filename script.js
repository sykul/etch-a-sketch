
let gridSize = 16;
document.body.onload = addGrid(gridSize);

console.log(gridSize);

function addGrid(gridSize) {
    const containerDiv = document.querySelector(".grid");
    containerDiv.innerHTML = "";

    if (gridSize > 100) {
        gridSize = 100;
    } else if (gridSize == 0 || isNaN(gridSize)) {
        gridSize = 1;
    }

    for (i=0; i<(gridSize*gridSize); i++) {
        let square = document.createElement("div");
        square.className = "square";
        containerDiv.appendChild(square);
        square.style.height = `calc(100%/${gridSize})`;
        square.style.flex = `1 1 calc(100%/${gridSize})`
        square.addEventListener('mouseover', () => {
            square.classList.add('blackSquare');
        })
    }
}

function chooseSize() {
    const gridSize = prompt("Choose your size, N*N, up to 100.");
    addGrid(gridSize);
}


document.querySelector("#sizeButton").addEventListener('click', chooseSize);