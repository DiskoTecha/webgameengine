class camera {
  constructor() {
    this.pos = {
      x : 0,
      y : 0
    }
  }

  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  getPosition() {
    return this.pos;
  }

  followEntity(entity, xFollow) {
    
  }
}

var mainCamera = new camera();
