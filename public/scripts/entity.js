class entity {
  constructor(name, imgSource, renderLayer, initPosX, initPosY) {
    this.name = name;
    this.source = imgSource;
    this.renderLayer = renderLayer;
    this.pos = {
      x : initPosX,
      y : initPosY
    }
    // Add to renderable orderedDictionary
    renderables.add(renderLayer, this);
  }

  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  preLoad() {
    // Preload image
    this.img = new Image();
    this.img.src = this.source;
  }
}
