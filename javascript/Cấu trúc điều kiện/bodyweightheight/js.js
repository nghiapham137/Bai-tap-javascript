function data() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var pow = Math.pow(height,2);
    var bmi = weight / pow;


    if (bmi < 18.5){
        document.getElementById("result").value = "Underweight";
    }
     else if (bmi < 25.0){
        document.getElementById("result").value = "Normal";
    }
        else if ( bmi < 30.0){
        document.getElementById("result").value = "Overweight";
    }
    else{
        document.getElementById("result").value = "Obese";
    }

}

