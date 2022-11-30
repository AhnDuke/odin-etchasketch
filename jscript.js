const cellArray = [];
const button = document.getElementById('reset')
let mouseStatus = ""

function createGrid (){
    for (let i = 0; i < 256; i++){
        const newDiv = document.createElement('div');
        const grid = document.getElementById('container');
        newDiv.innerHTML = "";
        newDiv.classList.add(`cell${i}`)
        cellArray.push(`.cell${i}`);
        grid.appendChild(newDiv);
    }
}
createGrid();

button.addEventListener("click", resetButton)
addEventListener("mousedown", mouseDown)
addEventListener("click", mouseClick)
addEventListener("mouseup", mouseRelease)

cellArray.forEach(trigger)


function trigger(){
    addEventListener("mouseover", turnBlack)
}

function turnBlack(){
    let e = event.target
    if(e == '[object HTMLDivElement]' && mouseStatus == 'on')
    e.classList.add('black')
}

function mouseDown(){
    return mouseStatus = 'on'
}

function mouseClick(){
    return mouseStatus = 'click'
}

function mouseRelease(){
    return mouseStatus = 'off'
}

function resetButton (){
    for (let i = 0; i < 256; i++){
        const c = document.querySelector(`.cell${i}`)
        c.classList.remove('black')
    }
}