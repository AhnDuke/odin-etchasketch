const cellArray = [];

function createGrid (){
    for (let i = 0; i < 256; i++){
        const newDiv = document.createElement('div');
        const grid = document.getElementById('container');
        newDiv.innerHTML = "s";
        newDiv.classList.add(`cell${i}`)
        cellArray.push(`.cell${i}`)
        grid.appendChild(newDiv)
    }
}
createGrid();

for(let i = 0; i < cellArray.length; i++) {
    cellArray[i].addEventListener("mouseover", turnBlack);
}

function turnBlack (){
    console.log("huh")
}
