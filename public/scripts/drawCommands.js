function drawCircle(ctx, startX, startY, radius, fill) {
  ctx.beginPath();
  ctx.arc(startX, startY, radius, 0, Math.PI * 2);
  if (fill) {
    ctx.fill();
  }
  else {
    ctx.stroke();
  }
}

function drawImage(ctx, x, y, img) {
  ctx.drawImage(img, x, y);
}
