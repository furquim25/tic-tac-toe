function selectPosition(clickedId) {
    clickedElement = document.getElementById(clickedId)
    currentText = clickedElement.textContent.trim()
    if (currentText == "X" ||  currentText == "O"){
        return
    }
    clickedElement.textContent = "X"
    checkWin()
}

function checkWin() {
    currentBoard = getArray()

    //Check horizontal win conditions
    currentBoard.forEach((item, index) => {
        if(item[0]==item[1] && item[0]==item[2] && item[0] == "X"){
            document.getElementsByClassName("main-text")[0].innerHTML = "You won!"
        } else if  (item[0]==item[1] && item[0]==item[2] && item[0] == "O"){
            document.getElementsByClassName("main-text")[0].innerHTML = "You lost!"
        }
    })

    //Check vertical win conditions
    transpose(currentBoard).forEach((item, index) => {
        if(item[0]==item[1] && item[0]==item[2] && item[0] == "X"){
            document.getElementsByClassName("main-text")[0].innerHTML = "You won!"
        } else if  (item[0]==item[1] && item[0]==item[2] && item[0] == "O"){
            document.getElementsByClassName("main-text")[0].innerHTML = "You lost!"
        }
    })
    
}

function getArray() {
    arrayBoard = [
        [document.getElementById(1).textContent.trim(),document.getElementById(2).textContent.trim(), document.getElementById(3).textContent.trim()],
        [document.getElementById(4).textContent.trim(),document.getElementById(5).textContent.trim(), document.getElementById(6).textContent.trim()],
        [document.getElementById(7).textContent.trim(),document.getElementById(8).textContent.trim(), document.getElementById(9).textContent.trim()]
    ]
    return arrayBoard
}

function transpose(matrix) {
  return matrix[0].map((col, i) => matrix.map(row => row[i]));
}