function addDigit(num) {
    var currentDig = document.getElementById("Display").value;
    currentDig = currentDig + num;
    document.getElementById("Display").value = currentDig;
}
function Clear() {
    document.getElementById("Display").value = "";
}
function addOp(num) {
    document.getElementById("operator").value = num;
    document.getElementById("firstnum").value = parseInt(document.getElementById("Display").value);
    document.getElementById("Display").value = "";
}
function Caculate() {
    var firstNum = parseInt(document.getElementById("firstnum").value);
    var operator = document.getElementById("operator").value;
    var secondNum = parseInt(document.getElementById("Display").value);
    var result = 0;
    if (operator == '+'){
        result = firstNum + secondNum;
    }else if (operator == '-'){
        result = firstNum - secondNum;
    }else if (operator == '*'){
        result = firstNum * secondNum;
    }else {
        result = firstNum / secondNum;
    }
    document.getElementById("Display").value = result;
}