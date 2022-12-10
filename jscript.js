const reset = document.getElementById('reset');
let mouseStatus = "";
const newGrid = document.getElementById('customGrid');
const container = document.getElementById('container');
const rowArray = [];
const cellArray = [];
const rowCountArray = [];
const columnCountArray = [];


function createGrid(){
    for(let i = 0; i<16; i++){
        let rowIteration = i;
        let newRow = document.createElement('div');
        newRow.classList.add(`row${i}`)
        newRow.setAttribute('id', `row${i}`);
        newRow.innerHTML = "";
        rowArray.push(`row${i}`);
        container.appendChild(newRow);
            for(let i = 0; i < 16; i++){
                const rowId = document.getElementById(`row${rowIteration}`)
                let newCell = document.createElement('div');
                const cellNum = ((rowIteration * 16)+i);
                newCell.innerHTML = "";
                newCell.setAttribute('id',`cell${cellNum}`);
                newCell.classList.add(`cell${cellNum}`);
                cellArray.push(`cell${cellNum}`);
                rowId.appendChild(newCell);
                    if (i == 15){
                    }
            }
    }
}
createGrid();

newGrid.addEventListener("click", customGrid)
reset.addEventListener("click", resetButton)
addEventListener("mousedown", mouseDown)
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

const newGridRow = "";
const columnArray = [];

function clearGrid(){
    for(let i = 0; i < rowArray.length; i++){
        const rowLength = rowArray.length
        const cellLength = cellArray.length
        const rowId = document.getElementById(rowArray[i])
        container.removeChild(rowId)
        if(i == (rowArray.length - 1)){
            rowArray.splice(0, rowLength)
            cellArray.splice(0, cellLength)
        }
    }
    console.log('VICTORY')
}


function rowPrompt(){
    let rowCount = window.prompt('Enter Number of Rows')
    console.log(rowCount)
    rowSort(rowCount)
}

function columnPrompt(){
    let columnCount = window.prompt('Enter Number of Columns')
    console.log(columnCount)
    columnSort(columnCount)
}


function columnSort(columnCount){
    if(columnCount == null){
        return columnCountArray[0] = 'bruh';
    }
    else if (isNaN(columnCount)){
        alert('Enter A Number!')
        columnPrompt()
    }
    else if (columnCount < 1){
        alert('Enter a Number Greater Than 0!')
        columnPrompt()
    }
    else if (columnCount > 100){
        alert('Enter a Number Less than 100!')
        columnPrompt()
    }
    else if (columnCount % 1 != 0){
        alert('Enter a Whole Number!')
        columnPrompt()
    }
    else 
    return columnCountArray[0] = columnCount;
 }

function rowSort(rowCount){
    if (rowCount == null){
        return rowCountArray[0] = 'bruh';
    }
    else if (isNaN(rowCount)){
        alert('Enter a Number!')
        rowPrompt()
    }
    else if (rowCount < 1){
        alert('Enter a Number Greater Than 0!')
        rowPrompt()
    }
    else if (rowCount > 100){
        alert('Enter a Number Less than 100!')
        rowPrompt()
    }
    else if (rowCount % 1 != 0){
        alert('Enter a Whole Number!')
        rowPrompt()
    }
    else return rowCountArray[0] = rowCount;
}

function customGrid(){
    columnPrompt();
    if(columnCountArray[0] == 'bruh'){
        console.log(columnCountArray[0])
        return;
    }
    rowPrompt();
    if(rowCountArray[0] == 'bruh'){
        console.log(columnCountArray[0])
        return;
    }
    else
    clearGrid();
    let rowCount = rowCountArray[0];
    let columnCount = columnCountArray[0];
    for(let i = 0; i < rowCount; i++){
        let rowIteration = i;
        let newRow = document.createElement('div');
        newRow.setAttribute('id', `row${i}`);
        newRow.classList.add(`row${i}`)
        newRow.innerHTML = "";
        rowArray.push(`row${i}`);
        container.appendChild(newRow);
        console.log('Eureka!');
            for(let i = 0; i <columnCount; i++){
                const rowId = document.getElementById(`row${rowIteration}`)
                let newCell = document.createElement('div');
                const cellNum = ((rowIteration * columnCount) + i);
                console.log(cellNum);
                newCell.innerHTML = "";
                newCell.setAttribute('id',`cell${cellNum}`);
                newCell.classList.add(`cell${cellNum}`)
                cellArray.push(`cell${cellNum}`);
                rowId.appendChild(newCell);
                    if (i == (rowIteration - 1)){
                        console.log(`row${rowIteration}`);
                    }
            }
    }
}


function resetButton (){
    for (let i = 0; i < cellArray.length; i++){
        const c = document.querySelector(`.cell${i}`)
        c.classList.remove('black')
    }
}