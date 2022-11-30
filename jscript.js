const cellArray = [];

function createGrid (){
    for (let i = 0; i < 256; i++){
        const newDiv = document.createElement('div');
        const grid = document.getElementById('container');
        newDiv.innerHTML = "";
        newDiv.classList.add(`cell${i}`)
        newDiv.classList.add('cell')
        cellArray.push(`.cell${i}`);
        grid.appendChild(newDiv);
    }
}
createGrid();

cellArray.forEach(trigger)

function trigger(){
    addEventListener("mouseover", turnBlackTwo)
    
}

function turnBlackTwo(){
    let e = event.target
    if(e == '[object HTMLDivElement]')
    e.classList.add('black')
}
