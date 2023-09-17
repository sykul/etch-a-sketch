document.body.onload = addGrid;

function addGrid() {
    const containerDiv = document.querySelector(".grid");
    for (i=0; i<256; i++) {
        let square = document.createElement("div");
        square.className = "square";
        containerDiv.appendChild(square);
        square.style.height = '40px';
        square.style.width = '40px';
    }
}

const square = document.querySelectorAll(".square")