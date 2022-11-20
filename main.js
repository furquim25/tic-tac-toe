function selectPosition(clickedId) {
    clickedElement = document.getElementById(clickedId)
    currentText = clickedElement.textContent.trim()
    if (currentText == "X" ||  currentText == "O"){
        return
    }
    clickedElement.textContent = "X"
    console.log(currentText)
    console.log(clickedId)
}

function checkWin() {

}

function getArray() {
    arrayBoard = [
        [document.getElementById(1).textContent,document.getElementById(2).textContent.getElementById(3).textContent],
        [document.getElementById(4).textContent,document.getElementById(5).textContent.getElementById(6).textContent],
        [document.getElementById(7).textContent,document.getElementById(8).textContent.getElementById(9).textContent]
    ]
    console.log(arrayBoard)
    return arrayBoard
}

function test() {
    const x = document.getElementById(1).textContent
    console.log(x)
    return x
}