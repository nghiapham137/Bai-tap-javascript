
var CurrentVal = "X";
var gameOver = false;
const boxes = document.getElementsByClassName("box");
const WinCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function AddVal(num) {
    let ID = "" + num ;
    if (document.getElementById(ID).innerHTML !== '') return;
    if (gameOver) return;
        if (CurrentVal === "X"){
            document.getElementById(ID).innerHTML = 'X';
            document.getElementById("player").innerHTML = 'X';
            CurrentVal = 'O';
        }else {
            document.getElementById(ID).innerHTML='0';
            document.getElementById("player").innerHTML = 'O';
            CurrentVal = 'X';
        }

    checkWin();
}

function checkWin() {
    for (let i = 0; i <= WinCombo.length; i++) {
        let ID = [];
        for (let j = 0; j <= WinCombo[i].length ; j++) {
            ID[j] = ""+ WinCombo[i][j];
        }
        if (document.getElementById(ID[0]).innerHTML === ""){
            continue;
        }

        let element0 = document.getElementById(ID[0]).innerHTML;
        let element1 = document.getElementById(ID[1]).innerHTML;
        let element2 = document.getElementById(ID[2]).innerHTML;

        if (element0 === element1 && element1 === element2){
            document.getElementById("winner").innerHTML = element0;
            gameOver = true;
            document.getElementById(ID[0]).style.backgroundColor= "lightblue";
            document.getElementById(ID[1]).style.backgroundColor= "lightblue";
            document.getElementById(ID[2]).style.backgroundColor= "lightblue";
            break;
        }
    }

}
function reSet() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].style.backgroundColor = "";
    }
    gameOver = false;
}
