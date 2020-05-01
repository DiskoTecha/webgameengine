var displayTime = "0";

function update(timePerFrame, timeAtFrame) {
  var dynObArray = dynamicObjects.getOrderedArray();
  for (var i = 0; i < dynObArray.length; i++) {
    dynObArray[i].dynamicUpdate(timePerFrame, timeAtFrame);
  }

  // displayTime = String(timeAtTick);
}
