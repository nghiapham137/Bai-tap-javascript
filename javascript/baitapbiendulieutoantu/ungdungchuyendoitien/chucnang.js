function convert(amount,select,select2) {
var result = amount;
if (select === select2){
   return amount;
}
if(select === "USD" && select2 === "JPY"){
    result= (amount*107);
}
if(select === "USD" && select2 === "VND"){
    result = (amount*23200);
}
if (select === "JPY" && select2 === "USD"){
    result = (amount/107);
}
if (select === "JPY" && select2 === "VND"){
    result = (amount*200);
}
if (select === "VND" && select2 === "USD"){
    result = (amount/23200);
}
if (select === "VND" && select2 === "JPY" ){
    result = (amount/200);
}
return result;
}
function changeValue() {
    var amount = document.getElementById("amount").value;
    var select = document.getElementById("select").value;
    var select2 = document.getElementById("select2").value;
    var result = convert(amount,select,select2);
    document.getElementById("ketqua").value = result;
}