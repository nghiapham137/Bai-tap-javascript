var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
window.addEventListener("keydown",turnSelection);
var object;
function startGame(){
    object = new creatImage(500,300,50,80);
    setInterval(updateGame,20);
}

let creatImage = function (x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.image = new Image();
    this.image.src = "images/gyaru.jpg";

    this.show = function () {
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }

    this.position = function () {
        if (this.x + this.directionX >= 0 && this.x + this.directionX <= canvas.width - this.width){
            this.x += this.directionX;
        }
        if (this.y + this.directionY <= canvas.height - this.height && this.y + this.directionY >= 0){
            this.y += this.directionY;
        }
    }

}




function turnSelection(evt) {

    switch (evt.keyCode) {
        case 37:
            object.directionX = -10;
            object.directionY = 0;
            break;
        case 38:
            object.directionX = 0;
            object.directionY = -10;
            break;
        case 39:
            object.directionX = 10;
            object.directionY = 0;
            break;
        case 40:
            object.directionY = 10;
            object.directionX = 0;
            break;

    }

}

function updateGame() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    object.position();
    object.show();
}