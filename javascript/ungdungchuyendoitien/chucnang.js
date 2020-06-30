function convert() {
var amount = document.getElementById("amount");
var select = document.getElementById("select");
var select2 = document.getElementById("select2");
var result = document.getElementById("result");
var total=0;
if (select.value === "USD" && select2.value === "USD"){
    result.value= amount.value;
    document.getElementById("result").innerHTML= total;
}
if(select.value === "USD" && select2.value === "JPY"){
    result.value = (amount.value*107);
    document.getElementById("result").innerHTML= total;
}
if(select.value === "USD" && select2.value === "VND"){
    result.value = (amount.value*23200);
    document.getElementById("result").innerHTML= total;
}
if (select.value === "JPY" && select2.value === "JPY"){
    result.value = amount.value;
    document.getElementById("result").innerHTML= total;
}
if (select.value === "JPY" && select2.value === "USD"){
    result.value = (amount.value/107);
    document.getElementById("result").innerHTML= total;
}
if (select.value === "JPY" && select2.value === "VND"){
    result.value = (amount.value*200);
    document.getElementById("result").innerHTML= total;
}
if (select.value === "VND" && select2.value === "VND"){
    result.value = amount.value;
    document.getElementById("result").innerHTML= total;
}
if (select.value === "VND" && select2.value === "USD"){
    result.value = (amount.value/23200);
    document.getElementById("result").innerHTML= total;
}
if (select.value === "VND" && select2.value === "JPY" ){
    result.value = (amount.value/200);
    document.getElementById("result").innerHTML= total;
}
}