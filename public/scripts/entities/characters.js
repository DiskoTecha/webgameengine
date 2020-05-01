var mc = new entity("Main Character", 1, true);

mc.setImageSource("images/mc.png");
mc.setPosition(400, 250);
mc.setMaxVel(175);
mc.setUpdateCallback(function (timePerFrame, timeAtFrame) {
  var sPerFrame = timePerFrame / 1000;
  var pixelsToMove = mc.getMaxVel() * sPerFrame;
  var newPos = mc.getPosition().x - pixelsToMove;
  mc.setPosition(newPos, mc.getPosition().y);
});

var enemy1 = new entity("Enemy 1", 1, true);
enemy1.setImageSource("images/enemy1.png");
enemy1.setMaxVel(150);
enemy1.setUpdateCallback(function(timePerFrame, timeAtFrame) {
  var sPerFrame = timePerFrame / 1000;
  var pixelsToMove = enemy1.getMaxVel() * sPerFrame;
  var newPos = enemy1.getPosition().x + pixelsToMove;
  enemy1.setPosition(newPos, enemy1.getPosition().y);
});
