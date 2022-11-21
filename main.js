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
    winText = "You won!"
    loseText = "You lost!"
    currentBoard = getBoardArray()

    //Check horizontal win conditions
    currentBoard.forEach((item, index) => {
        if(item[0]==item[1] && item[0]==item[2] && item[0] == "X"){
            if (item[0] == "X"){
                document.getElementsByClassName("main-text")[0].innerHTML = winText
            } else if (item[0] == "O"){
                document.getElementsByClassName("main-text")[0].innerHTML = loseText
            }
        }
    })

    //Check vertical win conditions
    transpose(currentBoard).forEach((item, index) => {
        if(item[0]==item[1] && item[0]==item[2]){
            if (item[0] == "X"){
                document.getElementsByClassName("main-text")[0].innerHTML = winText
            } else if (item[0] == "O"){
                document.getElementsByClassName("main-text")[0].innerHTML = loseText
            }
        }
    })

    //Check diagonals conditions
    console.log(currentBoard[0][0])
    if(currentBoard[0][0]==currentBoard[1][1] && currentBoard[0][0]==currentBoard[2][2]){
        if (currentBoard[0][0] == "X"){
            document.getElementsByClassName("main-text")[0].innerHTML = winText
        } else if (currentBoard[0][0] == "O"){
            document.getElementsByClassName("main-text")[0].innerHTML = loseText
        }
    }
    if(currentBoard[0][2]==currentBoard[1][1] && currentBoard[0][2]==currentBoard[2][0]){
        if (currentBoard[0][2] == "X"){
            document.getElementsByClassName("main-text")[0].innerHTML = winText
        } else if (currentBoard[0][2] == "O"){
            document.getElementsByClassName("main-text")[0].innerHTML = loseText
        }
    }
        
}

function getBoardArray() {
    arrayBoard = [
        [document.getElementById("pos1").textContent.trim(),document.getElementById("pos2").textContent.trim(), document.getElementById("pos3").textContent.trim()],
        [document.getElementById("pos4").textContent.trim(),document.getElementById("pos5").textContent.trim(), document.getElementById("pos6").textContent.trim()],
        [document.getElementById("pos7").textContent.trim(),document.getElementById("pos8").textContent.trim(), document.getElementById("pos9").textContent.trim()]
    ]
    return arrayBoard
}

function transpose(matrix) {
  return matrix[0].map((col, i) => matrix.map(row => row[i]));
}