
var ShootPressed;
document.addEventListener("keydown", keyDownShoot, false);
document.addEventListener("keyup"  , keyUpStopShoot , false);

function keyDownShoot(e){
if(e.keyCode == 69) {
        ShootPressed = true;
    }
}
function keyUpStopShoot(e){
 if(e.keyCode == 69) {
        ShootPressed = false;    
    }	
}


function initProjectile(){
var shoot = document.getElementById('projectiles');
var ctx4 = shoot.getContext("2d");


var projectileX = playerWidth+1;
var projectileY = playerY+(playerHeight/2);

var adx = 7;

function drawProjectile() {

    ctx4.shadowBlur = 10;
	ctx4.shadowColor = "#20c111";
	ctx4.fillStyle = "#20c111";
	ctx4.fillRect(projectileX, projectileY, 64, 4);
}
function projectileMove() {
    ctx4.clearRect(projectileX-15, projectileY-15, 72, 72);
    drawProjectile();
    projectileX += adx;
    requestAnimationFrame(projectileMove);
	if (projectileX == shoot.width) {
    	return;
    };
};


projectileMove();	
return {
        projectileY,
        projectileX

};
}

function laserSound(){
    var beam = document.getElementById('laserAudio');
     beam.play();
}

function generateProjectilePattern(){
		if (ShootPressed == true) {
            laserSound();
			initProjectile();
		}
    	setTimeout(generateProjectilePattern, 350);
}




