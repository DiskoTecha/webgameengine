// var displayTime = "0";

function update(timePerFrame, timeAtFrame) {
  // Move dynamic objects first
  var dynObArray = dynamicObjects.getOrderedArray();
  for (var i = 0; i < dynObArray.length; i++) {
    // Move according to dynOb movement
    dynObArray[i].dynamicUpdate(timePerFrame, timeAtFrame);
  }

  // Move camera last (in case it's following an entity that has moved this frame)
  activeCamera.dynamicUpdate(timePerFrame, timeAtFrame);

  // displayTime = String(timeAtTick);
}
