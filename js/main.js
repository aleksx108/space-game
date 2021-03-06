
window.onload = function(){
        ctx5.drawImage(img3,0,0,1024,640);
}

var main = document.getElementById("main");
var ctx5 = main.getContext("2d");
var img3 = new Image();
img3.src ='./img/thumb.png';
var img3Width = 640;
var img3Height = 640;

function drawMars(){
	ctx5.drawImage(img3,0,0,1024,640);
}

function drawText(){
	ctx5.font="80px VT323";
	ctx5.fillStyle = "#ffffff";
	ctx5.textBaseline = 'top';
	var caption = "Press ENTER "
	ctx5.fillText(caption,main.width/2,main.height/2);
}

function flashyText() {
    var count = 10,
        timer = setInterval(function() {
            count--;
            if( count%2 == 1) {
                drawText();
            }
            else {
                drawMars();
                count += 2;
            }
            if( count == 0 || EnterPressed == true) clearInterval(timer);
        },800);
}

var EnterPressed;
var ended = false;
document.addEventListener("keydown", keyEnterHandler, false);
function keyEnterHandler(e) {
    if(e.keyCode == 13) {
        EnterPressed = true;
        console.log('Enter pressed')
        video.play();
        init();
    }
}

function init() {
  var canvas = document.getElementById('main');
  var ctx = canvas.getContext('2d');
  var video = document.getElementById('video');

  video.addEventListener('play', function() {
    var isThis = this; //cache

    (function loop() {
      if (!isThis.paused && !isThis.ended) {
        ctx.drawImage(isThis, 0, 0);
        setTimeout(loop, 1000 / 30); // drawing at 30fps
        if (ended == true) {
            return;
        }
      }
    })();
  }, 0);
};
flashyText();

video.onended = function() {
    document.getElementById('main').style.zIndex = "-1";
    generateAsteroidPattern();
    generateProjectilePattern();
    draw();
    generateSmallStarPattern();
    generateBigStarPattern();
};
