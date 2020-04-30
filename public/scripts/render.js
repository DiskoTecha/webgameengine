

function render(tFrame) {
  // Clear last drawn screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw();

  ctx.fillStyle = "rgb(66, 99, 99)";
  ctx.font = "40px serif";
  ctx.fillText(displayTime, 0, 200);

  // for (var i = 0; i < renderables.length; i++) {
  //   let entity = renderables[i].entity;
  //   ctx.drawImage(entity.img, entity.pos.x, entity.pos.y);
  // }
}


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


function preLoadImages() {
  geodude.src = "images/ggg.jpg";
}
