var canvas = document.getElementById("maincanvas");
var ctx = canvas.getContext("2d");
var geodude = new Image();

var displayTime = "0";


function preLoadImages() {
  geodude.src = "images/ggg.jpg";
}

$(function() {
  preLoadImages();
});

function draw() {
  var canvas = document.getElementById("maincanvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgb(0, 200, 0)";
    drawCircle(ctx, 80, 80, 25, true);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);

    drawImage(ctx, 200, 200, geodude);

  }
  else {
    console.log("here");
  }
}

var game = {
  title : "SIMULATE",
  lastRender : 0,
  lastTick : 0,
  tickLength : 0
}


;(function () {

  // window.requestAnimationFrame shim
  if ( !window.requestAnimationFrame ) {
  	window.requestAnimationFrame = ( function() {
  		return window.webkitRequestAnimationFrame ||
  		window.mozRequestAnimationFrame ||
  		window.oRequestAnimationFrame ||
  		window.msRequestAnimationFrame ||
  		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
  			window.setTimeout( callback, 1000 / 60 );
  		};
    })();
  }

  // Main loop
  function main( tFrame ) {
    game.stopMain = window.requestAnimationFrame( main );

    var nextTick = game.lastTick + game.tickLength;
    var numTicks = 0;

    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - game.lastTick;
      numTicks = Math.floor(timeSinceTick / game.tickLength);
    }

    queueUpdates(numTicks);
    render(tFrame);
    game.lastRender = tFrame;
  }

  function queueUpdates(numTicks) {
    for(var i=0; i < numTicks; i++) {
      game.lastTick = game.lastTick + game.tickLength;
      update(game.lastTick);
    }
  }

  game.lastTick = performance.now();
  game.lastRender = game.lastTick;
  game.tickLength = 1000 / 60;

  main(performance.now());
})();

function update(tickTime) {
  displayTime = String(tickTime);
}

function render(tFrame) {
  // Clear last drawn screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw();

  ctx.fillStyle = "rgb(66, 99, 99)";
  ctx.font = "40px serif";
  ctx.fillText(displayTime, 0, 200);
}
