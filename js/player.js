var player = document.getElementById("player");
var ctx2 = player.getContext("2d");
var img = document.getElementById("character");

var playerHeight = 77;
var playerWidth = 216;
var playerY = Math.round(player.height - playerHeight)/2;
var playerX = -300;
var upPressed = false;
var downPressed  = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
}

function draw(){

    if (playerX < 10) {
        playerX += 10;
    }

	if(downPressed && playerY < (player.height-playerHeight)-10)  {
        playerY += 7;
    }
    else if(upPressed && playerY > 10) {        
        playerY -= 7;
    }
    
    ctx2.clearRect(0, 0, player.width, player.height);  
    ctx2.drawImage(img, playerX, playerY);
    // ctx2.fillStyle="#FF0000";
    // ctx2.fillRect(playerX,playerY,img.width,img.height);
    requestAnimationFrame(draw);
}