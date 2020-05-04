var mc = new entity("Main Character", 1, false);

mc.setImageSource("images/mc.png");
mc.setMaxVel(175);
mc.setWidth(25);
mc.setHeight(50);
mc.setPosition(SCREEN_WIDTH / 2 - mc.getWidth() / 2, SCREEN_HEIGHT / 2 - mc.getHeight() / 2);

mc.setUpdateCallback(function (timePerFrame, timeAtFrame) {
  var sPerFrame = timePerFrame / 1000;

  var vel = {
    x : 0,
    y : 0
  }

  if (controller.key.ArrowRight) {
    vel.x += mc.getMaxVel();
  }
  if (controller.key("ArrowLeft")) {
    vel.x -= mc.getMaxVel();
  }

  var pixelsToMove = vel.x * sPerFrame;
  var newPosX = mc.getPosition().x + pixelsToMove;
  mc.setPosition(newPosX, mc.getPosition().y);
});

// Set followTarget of activeCamera to be the mc
activeCamera.setFollowTarget(mc);

var enemy1 = new entity("Enemy 1", 1, false, false, 490, 250);
enemy1.setImageSource("images/enemy1.png");
enemy1.setMaxVel(150);
enemy1.setWidth(25);
enemy1.setHeight(50);
enemy1.setUpdateCallback(function(timePerFrame, timeAtFrame) {
  var sPerFrame = timePerFrame / 1000;
  var pixelsToMove = enemy1.getMaxVel() * sPerFrame;
  var newPos = enemy1.getPosition().x - pixelsToMove;
  enemy1.setPosition(newPos, enemy1.getPosition().y);
});

var enemy2 = new entity("Enemy 2", 1, false, false, 300, -20);
enemy2.setImageSource("images/enemy1.png");
enemy2.setMaxVel(150);
enemy2.setWidth(25);
enemy2.setHeight(50);
enemy2.setUpdateCallback(function(timePerFrame, timeAtFrame) {
  var sPerFrame = timePerFrame / 1000;
  var pixelsToMove = enemy2.getMaxVel() * sPerFrame;
  var newPos = enemy2.getPosition().x - pixelsToMove;
  enemy2.setPosition(newPos, enemy2.getPosition().y);
});
