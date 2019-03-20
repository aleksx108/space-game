var environment = document.getElementById("env");
var ctx3 = environment.getContext("2d");

var img2 = new Image();
img2.src = './img/asteroid_1.png';

function initAsteroid(){

var asteroidX = environment.width;
var asteroidY = Math.floor((Math.random() * environment.height) + 1);;
var adx = -3;



img2.addEventListener('load', function() {

  var width = img2.ClientlWidth;
  var height = img2.ClientHeight;
}, false);

 function drawCircle(){
	ctx3.beginPath();
	ctx3.arc(asteroidX+(img2.width/2),asteroidY+(img2.height/2), 54, 0, 2 * Math.PI);
	ctx3.fillStyle = "blue";
	ctx3.fill();
}

function AsteroidMove() {
    ctx3.clearRect(asteroidX, asteroidY, img2.width+3 , img2.height);
    ctx3.drawImage(img2, asteroidX, asteroidY);
    asteroidX += adx;
    // drawCircle();
    requestAnimationFrame(AsteroidMove);
    if (asteroidX == 0) {
    	return;
    };

}

AsteroidMove();
return {
        asteroidX,
        asteroidY
    }
};


function generateAsteroidPattern(){
	if (Visibility== true) {
		initAsteroid();
	}
    setTimeout(generateAsteroidPattern, 3000);
}
