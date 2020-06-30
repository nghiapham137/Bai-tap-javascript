
inputPhysic = prompt("Hãy nhập điểm Vật lý:")
inputChemis = prompt("Hãy nhập điểm Hóa:")
inputBio = prompt("Hãy nhập điểm Sinh học:")

let Physic = parseInt(inputPhysic);
let Chemis = parseInt(inputChemis);
let Bio = parseInt(inputBio);

let Average = (Physic + Chemis + Bio)/3;
let Average1 = parseFloat(Average);
let Sum = Physic + Chemis + Bio;

document.write("Trung bình điểm của học sinh là: "+ Average1 + "<br/>" + "Tổng điểm: "+ Sum);


