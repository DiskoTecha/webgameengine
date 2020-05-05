
function preLoadImages() {
  var toBeRendered  = renderables.getOrderedArray();
  for (var i = 0; i < toBeRendered.length; i++) {
    toBeRendered[i].preLoad();
  }
}

function render(tFrame) {
  // Clear last drawn screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  var toBeRendered = renderables.getOrderedArray();
  for (var i = 0; i < toBeRendered.length; i++) {
    let value = toBeRendered[i];

    // Find transposed position of entity according to camera position
    var renderPosX = value.getPosition().x;
    var renderPosY = value.getPosition().y;
    var renderRect = value.getImgRect();
    if (!value.getCameraStatic()) {
      renderPosX -= activeCamera.getPosition().x;
      renderPosY -= activeCamera.getPosition().y;
      var height = renderRect.bottom - renderRect.top;
      var width = renderRect.right - renderRect.left;
      renderRect.left = renderPosX;
      renderRect.top = renderPosY;
      renderRect.right = renderRect.left + width;
      renderRect.bottom = renderRect.top + height;
    }
    // If within the viewRect (screen)
    if (checkCollision(value.getImgRect(), renderRect)) {
      // Draw the entity
      ctx.drawImage(value.img, renderPosX, renderPosY);
    }
  }

  //
  // draw();
  //
  // ctx.fillStyle = "rgb(66, 99, 99)";
  // ctx.font = "40px serif";
  // ctx.fillText(displayTime, 0, 200);
}


// function draw() {
//   var canvas = document.getElementById("maincanvas");
//   if (canvas.getContext) {
//     var ctx = canvas.getContext("2d");
//
//     ctx.fillStyle = "rgb(200, 0, 0)";
//     ctx.fillRect(10, 10, 50, 50);
//
//     ctx.fillStyle = "rgb(0, 200, 0)";
//     drawCircle(ctx, 80, 80, 25, true);
//
//     ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//     ctx.fillRect(30, 30, 50, 50);
//
//     drawImage(ctx, 200, 200, geodude);
//
//   }
//   else {
//     console.log("here");
//   }
// }
