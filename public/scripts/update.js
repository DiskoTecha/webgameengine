var displayTime = "0";

function update(timePerFrame, timeAtFrame) {
  var physObArray = physicsObjects.getOrderedArray();
  for (var i = 0; i < physObArray.length; i++) {
    physObArray[i].physicsUpdate(timePerFrame, timeAtFrame);
  }

  // displayTime = String(timeAtTick);
}
