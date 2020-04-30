var canvas = document.getElementById("maincanvas");
var ctx = canvas.getContext("2d");
var geodude = new Image();

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

  // Preload renderables
  preLoadImages();

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
