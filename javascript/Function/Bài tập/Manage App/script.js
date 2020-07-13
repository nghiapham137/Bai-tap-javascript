let ProductName = ["Sony Xperia","Iphone 6","Samsung Note10"];
DisplayProduct();


function DisplayProduct() {
    let ProductTable = "<table id='table'>";

    for (let i = 0; i < ProductName.length ; i++) {
        num = i;
        let EditButton = "<input type='button' value='Edit' onclick='EditProduct("+i+")'>";
        let DeleteButton = "<input type='button' value='Delete' onclick='DeleteProduct("+i+")'>";
        ProductTable = ProductTable + "<tr><td class='product'>"+ProductName[i]+"</td><td class='button'>"+EditButton+"</td><td class='button'>"+DeleteButton+"</td></tr>";
    }
    document.getElementById("DisplayTable").innerHTML = ProductTable;
    document.getElementById("ProductTotal").value = ProductName.length;
}

function AddProduct() {
    let input = document.getElementById("inputProduct").value;
    for (let i = 0; i < ProductName.length ; i++) {
        if(input === ProductName[i]){
            alert("Sản phẩm này đã có");
            return;
        }
    }
    if (input === ""){
        alert("Cần phải nhập thông tin trước khi thêm vào");
        return;
    }
    ProductName.push(input);
    alert("Sản phẩm "+ input + " đã được thêm vào");
    document.getElementById("ProductTotal").value = ProductName.length;
    DisplayProduct();
}

function EditProduct(i) {
    let ChangeProduct = prompt("Hãy nhập nội dung chỉnh sửa: ");
    ProductName.splice(i,1,ChangeProduct);
    DisplayProduct();
}

function DeleteProduct(i) {
    ProductName.splice(i,1);
    document.getElementById("ProductTotal").value = ProductName.length;
    DisplayProduct();
}