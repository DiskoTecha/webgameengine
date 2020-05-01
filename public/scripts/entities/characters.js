var mc = new entity("Main Character", "images/mc.png", 1, 0, 50, 0);
mc.setPosition(400, 250);
mc.setMaxVel(100);
mc.setUpdateCallback(function (timePerFrame, timeAtFrame) {
  var sPerFrame = timePerFrame / 1000;
  var distanceToMove = mc.getMaxVel() * sPerFrame;
  var newPos = mc.getPosition().x - distanceToMove;
  mc.setPosition(newPos, mc.getPosition().y);
  console.log(timePerFrame);
});
var enemy1 = new entity("Enemy 1", "images/enemy1.png", 1, 200, 50, 1);
