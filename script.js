document.body.onload = addGrid;

function addGrid() {
    const containerDiv = document.querySelector(".grid");
    for (i=0; i<256; i++) {
        let square = document.createElement("div");
        square.className = "square";
        containerDiv.appendChild(square);
        square.style.height = '40px';
        square.style.width = '40px';
        square.addEventListener('mouseover', () => {
            square.classList.add('blackSquare');
        })
    }
}

function chooseSize() {
    const gridSize = prompt("Choose your size.");
    return gridSize;
}

document.querySelector("#sizeButton").addEventListener('click', chooseSize);