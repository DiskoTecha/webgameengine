class entity {
  constructor(name, imgSource, renderLayer, initPosX, initPosY, physicsOrder) {
    this.name = name;
    this.source = imgSource;
    this.renderLayer = renderLayer;
    this.pos = {
      x : initPosX,
      y : initPosY
    }

    this.updateCallback = null;

    // If imgSource isn't empty string, add to renderables orderedDictionary
    if (imgSource !== "") {
      renderables.add(renderLayer, this);
    }

    // If physicsOrder is defined, add to physicsObjects orderedDictionary
    if (physicsOrder !== undefined) {
      physicsObjects.add(physicsOrder, this);
    }
    else {
      console.log("undefined");
    }

    // Variables not set at definition
    this.maxVel = 0;
  }

  getPosition() {
    return this.pos;
  }

  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getSource() {
    return source;
  }

  setSource() {
    this.source = source;
  }

  getMaxVel() {
    return this.maxVel;
  }

  setMaxVel(maxVel) {
    this.maxVel = maxVel;
  }

  setUpdateCallback(callback) {
    this.updateCallback = callback;
  }

  preLoad() {
    // Preload image
    this.img = new Image();
    this.img.src = this.source;
  }

  physicsUpdate(timePerFrame, timeAtFrame) {
    if (this.updateCallback) {
      this.updateCallback(timePerFrame, timeAtFrame);
    }
  }
}


// Test for updateCallback and physicsUpdate

// var test = new entity("test", "somewhere", 0, 0, 0);
// test.setUpdateCallback(function (timePerFrame, timeAtFrame) {
//   console.log("timePerFrame = " + timePerFrame);
//   console.log("timeAtFrame = " + timeAtFrame);
// });
//
// test.physicsUpdate(300, 333);
