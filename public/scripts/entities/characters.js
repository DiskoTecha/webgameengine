var mc = new entity("Main Character", 1, true);

mc.setImageSource("images/mc.png");
mc.setPosition(0, 250);
mc.setMaxVel(175);
mc.setWidth(25);
mc.setHeight(50);
mc.setUpdateCallback(function (timePerFrame, timeAtFrame) {
  var sPerFrame = timePerFrame / 1000;
  var pixelsToMove = mc.getMaxVel() * sPerFrame;
  var newPosX = mc.getPosition().x + pixelsToMove;
  var newPosY = mc.getPosition().y - pixelsToMove / 3;
  mc.setPosition(newPosX, newPosY);
});

// Set followTarget of activeCamera to be the mc
activeCamera.setFollowTarget(mc);

var enemy1 = new entity("Enemy 1", 1, true, false, 500, 250);
enemy1.setImageSource("images/enemy1.png");
enemy1.setMaxVel(150);
enemy1.setUpdateCallback(function(timePerFrame, timeAtFrame) {
  var sPerFrame = timePerFrame / 1000;
  var pixelsToMove = enemy1.getMaxVel() * sPerFrame;
  var newPos = enemy1.getPosition().x - pixelsToMove;
  enemy1.setPosition(newPos, enemy1.getPosition().y);
});
