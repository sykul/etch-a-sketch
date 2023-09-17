document.body.onload = addGrid;

function addGrid() {
    const containerDiv = document.querySelector(".grid");
    for (i=0; i<256; i++) {
        let square = document.createElement("div");
        square.className = "square";
        containerDiv.appendChild(square);
        square.style.height = '50px';
        square.style.width = '50px';
    }

}

