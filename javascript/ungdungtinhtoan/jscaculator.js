function caculate(soa,sob,pheptinh) {

var result = 0;

if (pheptinh === "cong"){
    result = soa + sob;
}
if (pheptinh === "tru"){
    result = soa - sob;
}
if (pheptinh === "nhan"){
    result = soa * sob;
}
if (pheptinh === "chia"){
    result = soa / sob;
}
return result;

}
function changeValue() {
    var soa = parseFloat(document.getElementById("soa").value);
    var sob = parseFloat(document.getElementById("sob").value);
    var pheptinh = document.getElementById("pheptinh").value;
    var result = caculate(soa,sob,pheptinh);
    document.getElementById("ketqua").innerHTML = result;
}