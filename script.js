document.body.onload = addGrid;

function addGrid() {
    const containerDiv = document.querySelector(".grid");
    for (i=0; i<256; i++) {
        const square = document.createElement("div");
        containerDiv.appendChild(square);
    }
}