class entity {
  constructor(name, renderLayer, dynamic, initPosX, initPosY) {
    this.name = name;
    this.renderLayer = renderLayer;
    this.pos = {
      x : initPosX,
      y : initPosY
    }
    // Check is pos initialized to undefined
    if (this.pos.x === undefined || this.pos.x === null) {
      this.pos.x = 0;
    }
    if (this.pos.y === undefined || this.pos.y === null) {
      this.pos.y = 0;
    }
    // Initialize updateCallback function
    this.updateCallback = null;

    // If renderLayer isn't null/undefined, add to renderables orderedDictionary
    if (renderLayer !== undefined && renderLayer !== null) {
      renderables.add(renderLayer, this);
    }

    // If dynamic is defined, not null and true, add to dynamicObjects orderedDictionary
    if (dynamic !== undefined && dynamic !== null && dynamic) {
      dynamicObjects.add(0, this);
    }

    // Variables not set at definition
    this.source = null;
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

  getImageSource() {
    return source;
  }

  setImageSource(source) {
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

  dynamicUpdate(timePerFrame, timeAtFrame) {
    if (this.updateCallback) {
      this.updateCallback(timePerFrame, timeAtFrame);
    }
    else {
      console.log("dynamic set true on entity constructor for " + this.name + ", however updateCallback function has not been set");
      console.log("use setUpdateCallback() member function on " + this.name + " to activate updating");
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
