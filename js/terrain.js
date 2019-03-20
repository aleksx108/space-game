function initBigStar(){
var terrain = document.getElementById("terrain");
var ctx1 = terrain.getContext("2d");


var x = terrain.width;
var y = Math.floor((Math.random() * terrain.height) + 1);;

var dx = -2;

function drawBigStar() {
    ctx1.fillStyle = "#ffffff";
	ctx1.fillRect(x, y, 4, 4);

}
function BigStarMove() {
    ctx1.clearRect(x, y, 6, 6);
    drawBigStar();
    x += dx;
    requestAnimationFrame(BigStarMove);
	if (x == 0) {
    	return;
    };
};


BigStarMove();

};



function initSmallStar(){
	var terrain = document.getElementById("terrain");
	var ctx1 = terrain.getContext("2d");

	var x2 = terrain.width;
	var y2 = Math.floor((Math.random() * terrain.height) + 1);

	var dx2 = -1;

	function drawSmallStar() {
		ctx1.fillStyle = "#ededed";
		ctx1.fillRect(x2, y2, 2, 2);
	}
	function smallStarMove() {
    	ctx1.clearRect(x2, y2, 5, 5);
    	drawSmallStar();
    	x2 += dx2;
    	requestAnimationFrame(smallStarMove);
    	if (x2 == 0) {
    	return;
    	};
	}
	smallStarMove();
};


function generateBigStarPattern(){
		if (Visibility == true) {
			initBigStar();
		}
    	setTimeout(generateBigStarPattern, 1000);
}


function generateSmallStarPattern(){

		if (Visibility == true) {
		initSmallStar();
		}
    	setTimeout(generateSmallStarPattern, 500);
}




var Visibility = true;

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState == 'hidden'){
  		Visibility = false;


  }else if (document.visibilityState == 'visible') {
  	Visibility = true;


  }
});
